import { Component } from "@angular/core";

@Component({
  selector: "conf-footer",
  template: `
    <div class="inner">
      &copy; 2019 NgRx Conf
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        padding: 20px;
        background-color: #241b27;
        color: white;
      }

      .inner {
        display: block;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        opacity: 0.7;
      }
    `
  ]
})
export class FooterComponent {}
