import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AmazonSearchComponent } from "./amazon-search/amazon-search.component";

const routes: Routes = [
  {
    path: "",
    component: AmazonSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
