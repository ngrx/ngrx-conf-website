import { Component } from "@angular/core";

@Component({
  selector: "conf-sponsor-cta",
  template: `
    <div class="inner">
      <h3>Interested in Sponsoring NgRx Conf?</h3>
      <a href="mailto:contact@ngrxconf.com">Get in Touch</a>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        padding: 50px 20px;
        background-color: #ad4acb;
      }

      .inner {
        display: flex;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
      }

      h3 {
        font-size: 28px;
        font-family: "Sansation Bold", sans-serif;
        color: white;
      }

      a {
        background-color: #fae9ff;
        font-weight: 900;
        font-size: 20px;
        color: #ad4acb;
        padding: 13px 28px;
        border-radius: 2px;
        text-transform: uppercase;
        text-decoration: none;
        transition: background-color 300ms;
      }

      a:hover {
        background-color: white;
      }
    `
  ]
})
export class SponsorCtaComponent {}
