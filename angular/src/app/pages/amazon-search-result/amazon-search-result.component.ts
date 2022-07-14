import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Table } from "primeng/table";
import { PrimeNGConfig } from "primeng/api";
import {
  ScrollToConfigOptions,
  ScrollToService,
} from "@nicky-lenaers/ngx-scroll-to";

@Component({
  selector: "app-amazon-search-result",
  templateUrl: "./amazon-search-result.component.html",
  styleUrls: ["./amazon-search-result.component.scss"],
})
export class AmazonSearchResultComponent implements OnInit {
  currentSection = "product-search";
  products = [];
  @Input() product;
  @Input() isSuccessData;
  @Input() inputData;
  screenResponsive: boolean = false;
  screenFull: boolean = false;

  cols: any[];
  exportColumns: any[];
  selectedProducts = [];
  loading: boolean = true;

  @ViewChild("dt") table: Table;
  constructor(
    private primengConfig: PrimeNGConfig,
    private scrollToService: ScrollToService
  ) {}

  search(e) {
    return e.target.value;
  }

  ratingFloor(rating) {
    if (rating !== null) {
      rating = rating.substring(0, 2);
      return Math.floor(rating);
    }
    return 0;
  }

  titleCheck(string) {
    if (string.length > 125) {
      string = string.substring(0, 125) + "...";
      return string;
    }
    return string;
  }

  mainCountry(country) {
    switch (country) {
      case "us":
        return "United States";
      case "de":
        return "Germany";
      case "ca":
        return "Canada";
      case "mx":
        return "Mexico";
      case "sg":
        return "Singapore";
      case "tr":
        return "Turkey";
      case "fr":
        return "France";
      case "au":
        return "Australia";
      case "jp":
        return "Japan";
      case "uk":
        return "United Kingdom";
    }
    return country;
  }

  flagMainSrc(country) {
    switch (country) {
      case "us":
        return "united-states.png";
      case "de":
        return "germany.png";
      case "ca":
        return "canada.png";
      case "mx":
        return "mexico.png";
      case "sg":
        return "singapore.png";
      case "tr":
        return "turkey.png";
      case "fr":
        return "france.png";
      case "au":
        return "austallia.png";
      case "jp":
        return "japan.png";
      case "uk":
        return "united-kingdom.png";
    }
    return country;
  }

  flagDeliverySrc(country) {
    switch (country) {
      case "United States":
        return "united-states.png";
      case "Germany":
        return "germany.png";
      case "Canada":
        return "canada.png";
      case "Mexico":
        return "mexico.png";
      case "Singapore":
        return "singapore.png";
      case "Turkey":
        return "turkey.png";
      case "France":
        return "france.png";
      case "Australia":
        return "austallia.png";
      case "Japan":
        return "japan.png";
      case "United Kingdom":
        return "united-kingdom.png";
    }
    return country;
  }

  exportAll() {
    this.cols = [
      { field: "asin", header: "ASIN" },
      { field: "title", header: "Title" },
      { field: "price", header: "Price" },
    ];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  exportAsin() {
    this.cols = [{ field: "asin", header: "ASIN" }];
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  export() {
    this.table.exportCSV();
  }

  ngOnInit() {
    const config: ScrollToConfigOptions = {
      target: "#search-result",
    };
    this.scrollToService.scrollTo(config);
    this.products = this.product.result.products;
    this.loading = false;
    this.primengConfig.ripple = true;
    this.exportAll();
    if (window.screen.width >= 768) {
      this.screenFull = true;
    } else {
      this.screenFull = false;
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}
