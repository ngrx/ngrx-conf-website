import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  HomePageComponent,
  HomePageComponentModule
} from "./home/components/home-page";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
