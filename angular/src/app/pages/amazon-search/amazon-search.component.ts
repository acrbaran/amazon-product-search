import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  ScrollToService,
  ScrollToConfigOptions,
} from "@nicky-lenaers/ngx-scroll-to";
import { MessageService } from "primeng/api";
import { ServicesService } from "src/app/services/services.service";
declare var $: any;

@Component({
  selector: "app-amazon-search",
  templateUrl: "./amazon-search.component.html",
  styleUrls: ["./amazon-search.component.scss"],
  providers: [MessageService],
})
export class AmazonSearchComponent implements OnInit {
  currentSection = "product-search";
  targetOptions: any[];
  contents: string =
    "If you don't want to use your own proxy, product search results will run slower.";
  checked1: boolean = false;
  onLabelMessage: string = "I will use proxy";
  offLabelMessage: string = "I will not use proxy";
  onIconString: string = "pi pi-check";
  hasCountryError: boolean = false;
  hasKeywordError: boolean = false;
  hasStartPageError: boolean = false;
  hasEndPageError: boolean = false;
  blockedSearchPanel: boolean = false;
  isSuccessData: boolean = false;
  proxyListArray: any[];
  productList: any[];
  inputData: any[];

  constructor(
    private scrollToService: ScrollToService,
    private httpRest: ServicesService,
    private messageService: MessageService
  ) {
    this.targetOptions = [
      {
        label: "us",
        value: "us",
        img: "../../../assets/images/country/united-states.png",
        tooltip: "United States",
      },
      {
        label: "de",
        value: "de",
        img: "../../../assets/images/country/germany.png",
        tooltip: "Germany",
      },
      {
        label: "ca",
        value: "ca",
        img: "../../../assets/images/country/canada.png",
        tooltip: "Canada",
      },
      {
        label: "mx",
        value: "mx",
        img: "../../../assets/images/country/mexico.png",
        tooltip: "Mexico",
      },
      {
        label: "sg",
        value: "sg",
        img: "../../../assets/images/country/singapore.png",
        tooltip: "Singapore",
      },
      {
        label: "tr",
        value: "tr",
        img: "../../../assets/images/country/turkey.png",
        tooltip: "Turkey",
      },
      {
        label: "fr",
        value: "fr",
        img: "../../../assets/images/country/france.png",
        tooltip: "France",
      },
      {
        label: "au",
        value: "au",
        img: "../../../assets/images/country/austallia.png",
        tooltip: "Australia",
      },
      {
        label: "jp",
        value: "jp",
        img: "../../../assets/images/country/japan.png",
        tooltip: "Japan",
      },
      {
        label: "uk",
        value: "uk",
        img: "../../../assets/images/country/united-kingdom.png",
        tooltip: "United Kingdom",
      },
    ];
  }

  searchForm = new FormGroup({
    target: new FormControl("", [Validators.required]),
    keyword: new FormControl("", [Validators.required]),
    pageStart: new FormControl("", [Validators.required]),
    pageEnd: new FormControl("", [Validators.required]),
    isUseProxy: new FormControl(false),
    proxyList: new FormControl([]),
  });

  pageStart() {
    let pageStartValue = $("#float-input-start").val();
    if (pageStartValue < 1) {
      this.searchForm.patchValue({ pageStart: 1 });
    }
    if ($("#float-input-end").val() > 0) {
      if (
        Number($("#float-input-start").val()) >
        Number($("#float-input-end").val())
      ) {
        this.searchForm.patchValue({
          pageStart: $("#float-input-end").val(),
        });
      }
    }
  }

  pageEnd() {
    let pageEndValue = $("#float-input-end").val();
    if (pageEndValue > 20) {
      this.searchForm.patchValue({ pageEnd: 20 });
    }
    if ($("#float-input-start").val() > 0) {
      if (
        Number($("#float-input-start").val()) >
        Number($("#float-input-end").val())
      ) {
        this.searchForm.patchValue({
          pageEnd: $("#float-input-start").val(),
        });
      }
    }
  }

  randomProxy() {
    this.searchForm.patchValue({ proxyList: [] });
    this.getProxyList();
    this.searchForm.patchValue({ proxyList: this.proxyListArray });
    var txt;
    txt = $("#float-input-count").val();
    var text = txt.split(",");
    var str = text.join("\n");
    this.searchForm.patchValue({ proxyList: str });
    $("#linesUsed").text($("#float-input-count").val().split("\n").length);
  }

  textCount() {
    if (!this.searchForm.value.isUseProxy) {
      this.searchForm.patchValue({ proxyList: [] });
    }
    var linesUsed = $("#linesUsed");

    $("#float-input-count").keydown(function () {
      let newLines = $("#float-input-count").val().split("\n").length;
      linesUsed.text(newLines);
    });
  }

  textAreaCount() {
    let textarea = $("#float-input-count").val().split("\n");
    if (textarea.length === 1) {
      $("#linesUsed").text(textarea.length - 1);
    } else {
      $("#linesUsed").text(textarea.length);
    }
  }

  countryCheck() {
    this.searchForm.controls["target"].valid
      ? (this.hasCountryError = false)
      : (this.hasCountryError = true);
  }

  clearForm() {
    this.searchForm.reset();
    this.searchForm.patchValue({ proxyList: [], isUseProxy: false });
    this.hasCountryError = false;
    this.hasKeywordError = false;
    this.hasStartPageError = false;
    this.hasEndPageError = false;
  }

  onSubmit() {
    if (this.searchForm.valid) {
      this.productList = [];
      this.isSuccessData = false;
      this.blockedSearchPanel = true;
      setInterval(function () {
        $("#search-block-label").text(
          "The search process may take a while. In the meantime, please sit back and wait."
        );
      }, 3000);
      setInterval(function () {
        $("#search-block-label").text(
          "We look forward to showing you the search results."
        );
      }, 6000);
      const formData = {
        target: this.searchForm.value.target,
        keyword: this.searchForm.value.keyword,
        pageStart: this.searchForm.value.pageStart,
        pageEnd: this.searchForm.value.pageEnd,
        isUseProxy: this.searchForm.value.isUseProxy,
        proxyList:
          this.searchForm.value.proxyList.length > 0
            ? this.searchForm.value.proxyList.split("\n")
            : [],
      };
      this.httpRest.searchProducts(formData).subscribe(
        (data) => {
          if (data.success === false) {
            this.blockedSearchPanel = false;
            this.showBottomCenter();
          } else {
            this.inputData = this.searchForm.value;
            this.productList = data;
            this.isSuccessData = true;
            this.blockedSearchPanel = false;
            this.searchForm.reset();
            this.searchForm.patchValue({ proxyList: [], isUseProxy: false });
            this.hasCountryError = false;
            this.hasKeywordError = false;
            this.hasStartPageError = false;
            this.hasEndPageError = false;
          }
        },
        (error) => {
          this.blockedSearchPanel = false;
          this.searchForm.reset();
          this.searchForm.patchValue({ proxyList: [], isUseProxy: false });
          this.hasCountryError = false;
          this.hasKeywordError = false;
          this.hasStartPageError = false;
          this.hasEndPageError = false;
        }
      );
    } else {
      this.blockedSearchPanel = false;
      this.searchForm.controls["keyword"].valid
        ? (this.hasKeywordError = false)
        : (this.hasKeywordError = true);
      this.searchForm.controls["pageStart"].valid
        ? (this.hasStartPageError = false)
        : (this.hasStartPageError = true);
      this.searchForm.controls["pageEnd"].valid
        ? (this.hasEndPageError = false)
        : (this.hasEndPageError = true);
      this.searchForm.controls["target"].valid
        ? (this.hasCountryError = false)
        : (this.hasCountryError = true);
      if (this.searchForm.value.proxyList?.length > 0) {
        this.searchForm.value.proxyList =
          this.searchForm.value.proxyList.split("\n");
      }
    }
  }

  showBottomCenter() {
    this.messageService.add({
      key: "bc",
      severity: "warn",
      summary: "Warn",
      detail: "Please enter a different proxy or try again later.",
    });
  }

  getProxyList() {
    this.httpRest.getProxyList().subscribe(
      (response: any) => {
        this.proxyListArray = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getProxyList();
  }

  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      if (navbar !== null) {
        navbar.classList.add("nav-sticky");
      }
    } else {
      if (navbar !== null) {
        navbar.classList.remove("nav-sticky");
      }
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  toggleMenu() {
    const nav = document.getElementById("navbarNav");
    if (nav !== null) {
      nav.classList.toggle("show");
    }
  }
}
