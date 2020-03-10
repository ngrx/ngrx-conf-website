import { Component } from "@angular/core";

@Component({
  selector: "conf-home-page",
  template: `
    <conf-header-art></conf-header-art>
    <conf-header-cta></conf-header-cta>
    <conf-stats></conf-stats>
    <conf-speakers></conf-speakers>
    <conf-venue></conf-venue>
    <conf-sponsors></conf-sponsors>
    <conf-sponsor-cta></conf-sponsor-cta>
    <conf-workshop-cta></conf-workshop-cta>
  `
})
export class HomePageComponent {}
