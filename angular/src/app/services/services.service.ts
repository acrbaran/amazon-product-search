import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getProxyList() {
    return this.http.get(environment.proxyApiUrl);
  }

  searchProducts(body: any): Observable<any> {
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/json; charset=utf-8"
    );
    return this.http.post<any>(environment.searchApiUrl, body, {
      headers: headers,
    });
  }
}
