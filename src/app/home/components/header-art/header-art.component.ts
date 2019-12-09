import { Component } from "@angular/core";

@Component({
  selector: "conf-header-art",
  template: ``,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 460px;
        background-color: #3a2c42;
        background-image: url("/assets/header.jpg");
        background-position: center;
        background-repeat: no-repeat;
      }
    `
  ]
})
export class HeaderArtComponent {}
