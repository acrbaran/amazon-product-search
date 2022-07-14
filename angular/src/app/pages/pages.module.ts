import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { PagesRoutingModule } from "./pages-routing.module";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";
import { ToggleButtonModule } from "primeng/togglebutton";
import { InputTextareaModule } from "primeng/inputtextarea";
import { SelectButtonModule } from "primeng/selectbutton";
import { TooltipModule } from "primeng/tooltip";
import { BlockUIModule } from "primeng/blockui";
import { PanelModule } from "primeng/panel";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { TableModule } from "primeng/table";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { DialogModule } from "primeng/dialog";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { ToastModule } from "primeng/toast";
import { ProgressBarModule } from "primeng/progressbar";
import { DropdownModule } from "primeng/dropdown";
import { TagModule } from "primeng/tag";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { SpeedDialModule } from "primeng/speeddial";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { AmazonSearchComponent } from "./amazon-search/amazon-search.component";
import { AmazonSearchResultComponent } from "./amazon-search-result/amazon-search-result.component";

@NgModule({
  declarations: [AmazonSearchComponent, AmazonSearchResultComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ScrollToModule.forRoot(),
    CarouselModule,
    NgbAccordionModule,
    NgxYoutubePlayerModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ToggleButtonModule,
    InputTextareaModule,
    SelectButtonModule,
    TooltipModule,
    BlockUIModule,
    PanelModule,
    ProgressSpinnerModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ToastModule,
    ProgressBarModule,
    FormsModule,
    TagModule,
    RatingModule,
    RippleModule,
    SpeedDialModule,
  ],
})
export class PagesModule {}
