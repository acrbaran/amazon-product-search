import flask
from flask import jsonify
from flask import request
from selectorlib import Extractor
import requests
import json
from time import sleep
import re
import threading
import numpy as np
from concurrent.futures import ThreadPoolExecutor, as_completed
import random
from flask_cors import CORS

app = flask.Flask(__name__,static_url_path='/',static_folder='static')
CORS(app)
app.debug = False
selectors = Extractor.from_yaml_file('search_results.yml')
threadPerUrl = 5

def validateSearchRequest(request):
    if not request.json:
        return {'success': False, 'error': 'Please send body with a JSON.'}
    if "isUseProxy" not in request.json:
        return {'success': False, 'error': 'isUseProxy required.'}
    if isinstance(request.json["isUseProxy"], bool) == False:
        return {'success': False, 'error': 'isUseProxy type must be Boolean.'}
    if ( request.json["isUseProxy"] == True ): 
        if "proxyList" not in request.json:
            return {'success': False, 'error': 'proxyList required.'}
        if isinstance(request.json["proxyList"], list) == False:
            return {'success': False, 'error': 'proxyList type must be List.'}
        if len(request.json["proxyList"]) == 0:
            return {'success': False, 'error': 'proxyList can not empty.'}
    if "keyword" not in request.json:
        return {'success': False, 'error': 'keyword required.'}
    if isinstance(request.json["keyword"], str) == False:
        return {'success': False, 'error': 'keyword type must be string.'}
    if "pageStart" not in request.json:
        return {'success': False, 'error': 'pageStart required.'}
    if isinstance(request.json["pageStart"], int) == False:
        return {'success': False, 'error': 'pageStart type must be integer.'}
    if "pageEnd" not in request.json:
        return {'success': False, 'error': 'pageEnd required.'}
    if isinstance(request.json["pageEnd"], int) == False:
        return {'success': False, 'error': 'pageEnd type must be integer.'}
    if request.json["pageStart"] > request.json["pageEnd"]:
        return {'success': False, 'error': 'pageStart can not bigger than pageEnd.'}
    if request.json["pageEnd"] > 20:
        return {'success': False, 'error': 'up to 20 pages can be searched.'}
    if "target" not in request.json:
        return {'success': False, 'error': 'target required.'}
    if isinstance(request.json["target"], str) == False:
        return {'success': False, 'error': 'target type must be string.'}
    if  request.json["target"] not in ["us", "uk", "ca", "sg", "jp", "de", "tr", "au", "fr", "mx"]:
        return {'success': False, 'error': 'The target should be in this list. "us", "uk", "ca", "sg", "jp", "de", "tr", "au", "fr", "mx" '}
    return {'success': True}

def urlCreatorQuery(query, page, target):
    switcher = {
        "us": "com",
        "uk": "co.uk",
        "ca": "ca",
        "sg": "sg",
        "jp": "co.jp",
        "de": "de",
        "tr": "com.tr",
        "au": "com.au",
        "fr": "fr",
        "mx": "com.mx"
        
        
    }
    return "http://www.amazon."+switcher.get(target, "com")+"/s?k="+query+"&page="+str(page)+"&ref=nb_sb_noss"

def settedFunction(asin, settedData):
    return [element for element in settedData if element['asin'] == asin]

def validateProxy(proxy):
    ### Correct Proxy Format
    ### http://user:password@proxyIp:port
    proxyDict = {
            "http": proxy,
            "https": proxy,
    }
    r = requests.get("http://lumtest.com/myip.json", proxies=proxyDict)
    if r.status_code == 200:
        return True
    else:
        return False    

def attacker(url, proxyList):
    proxy = "";
    headers = {
        'dnt': '1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8'
        }

    if len(proxyList) == 0:
        #Without using a proxy
        r = requests.get(url, headers=headers)
    else:
        #Using a proxy
        proxy = proxyList.pop(0);
        proxyList.append(proxy)
        isProxyAvailable = validateProxy(proxy);
        if isProxyAvailable == False:
            return {"success": False}
        proxyDict = {
            "http": proxy,
            "https": proxy,
        }
        r = requests.get(url, headers=headers, proxies=proxyDict)
    if r.status_code > 500:
        return {"success": False}
    if "Sorry, we just need to make sure you're not a robot. For best results, please make sure your browser is accepting cookies." in r.text:
        return {"success": False}
    else:
        data = selectors.extract(r.text)
        for product in data["products"]:
            product["deliveryTo"] = data["deliveryTo"];
            product["url"]= '/'.join(url.split('/')[:3]) + product["url"]
        return {"success": True, "data": data}

def urlThreadsMastery(url, proxyList, threadPerUrl):
    threads = []
    with ThreadPoolExecutor(max_workers=(5 if threadPerUrl > 5 else threadPerUrl)) as executor:
        for x in range(0, 5 if threadPerUrl > 5 else threadPerUrl):
            threads.append(executor.submit(attacker, url, proxyList))
        for task in as_completed(threads):
            data = task.result()
            if data["success"] == True:
                return {"success": True, "data": data["data"]}
    return {"success": False}

### Multiple request for an url, per request using a different proxy
def threadsFunc(urls, proxyList):
    threads = []
    products = []
    with ThreadPoolExecutor(max_workers=(len(urls))) as executor:
        for url in urls:
            threads.append(executor.submit(urlThreadsMastery, url, proxyList, threadPerUrl))
        for task in as_completed(threads):
            data = task.result()
            if(data["success"]==True):
                products += data["data"]["products"]
        return {"products": products}


@app.route('/')
def template():
    return app.send_static_file('index.html')

@app.route('/api/search', methods=['POST'])
def search():
   try:
    validate = validateSearchRequest(request);
    if validate["success"] == False:
        return jsonify(validate)
    result = []
    urls = []
    isUseProxy = False
    proxyList = []
    if request.json["isUseProxy"] == True:
        proxyList = request.json["proxyList"];
    pageStart = int(request.json["pageStart"]) if 'pageStart' in request.json else 1
    pageEnd = int(request.json["pageEnd"]) if 'pageEnd' in request.json else 1
    if pageStart > pageEnd:
            pageStart = 1
            pageEnd = 1
    for x in range(pageStart, pageEnd+1):
        urls.append(urlCreatorQuery(request.json['keyword'], x, request.json["target"]))
    altresult = threadsFunc(urls, proxyList)
    if len(altresult["products"]) > 0:
        settedData = []
        for product in altresult["products"]:
            if 'asins' in request.json:
                if product["asin"] not in request.json["asins"]:
                    break
            if len(settedFunction(product["asin"], settedData)) < 1:
                settedData.append(product)
        print({"json":request.json, "resultLength":len(settedData)});
        response = jsonify({'success': True, 'result': {'products': settedData }})
    else:
        response = jsonify({'success': False, 'result': {'products': [] } })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
   except:
    return jsonify({'success': False, 'result': {'products': [] } })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=80)
