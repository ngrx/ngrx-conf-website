import { Component } from "@angular/core";

@Component({
  selector: "conf-header-cta",
  template: `
    <h2>The Galaxy's First Reactive Angular Conference</h2>
    <p>
      Blasting off from the <em>U.S. Space &amp; Rocket Center</em> on
      <em>November 5th &amp; 6th, 2020</em>
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        width: 100%;
        max-width: 1080px;
        padding: 72px 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }

      h2 {
        font-family: "Sansation Bold", sans-serif;
        font-size: 34px;
        color: #1e012f;
        margin: 0 0 12px;
      }

      p {
        font-family: "Roboto", sans-serif;
        color: #552175;
        font-weight: 300;
        font-size: 22px;
      }

      em {
        font-weight: 400;
      }
    `
  ]
})
export class HeaderCtaComponent {}
