import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";

import { CarouselModule } from "ngx-owl-carousel-o";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { ScrollspyDirective } from "./scrollspy.directive";
import { CountToModule } from "angular-count-to";
import {
  NgbAccordionModule,
  NgbRatingModule,
} from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [ScrollspyDirective, FooterComponent],
  imports: [
    CommonModule,
    CarouselModule,
    ScrollToModule.forRoot(),
    FeatherModule.pick(allIcons),
    CountToModule,
    NgbAccordionModule,
    NgbRatingModule,
  ],
  exports: [FooterComponent, FeatherModule, ScrollspyDirective],
})
export class SharedModule {}
