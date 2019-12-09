import { Component } from "@angular/core";

@Component({
  selector: "conf-root",
  template: `
    <conf-navbar></conf-navbar>
    <router-outlet></router-outlet>
    <conf-footer></conf-footer>
  `,
  styles: []
})
export class AppComponent {}
