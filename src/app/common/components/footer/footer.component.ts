import { Component } from "@angular/core";

@Component({
  selector: "conf-footer",
  template: `
    <div class="inner">
      <span>&copy; 2019 NgRx Conf</span>

      <a href="mailto:contact@ngrxconf.com">contact@ngrxconf.com</a>
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
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
      }

      span {
        opacity: 0.7;
      }

      a {
        text-decoration: none;
        color: #ad4acb;
      }
    `
  ]
})
export class FooterComponent {}
