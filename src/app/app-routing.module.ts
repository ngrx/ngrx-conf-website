import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  HomePageComponent,
  HomePageComponentModule
} from "./home/components/home-page";
import {
  CocPageComponent,
  CocPageComponentModule
} from "./coc/components/coc-page";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "code-of-conduct",
    component: CocPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageComponentModule,
    CocPageComponentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
