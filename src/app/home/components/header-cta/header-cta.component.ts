import { Component } from "@angular/core";

@Component({
  selector: "conf-header-cta",
  template: `
    <div class="inner">
      <h2>The Galaxy's First Reactive Angular Conference</h2>
      <p>
        Blasting off from the <em>U.S. Space &amp; Rocket Center</em> on
        <em>November 5th &amp; 6th, 2020</em>
      </p>
      <div class="divider"></div>
      <h4>Sign up to be notified when tickets go on sale in early 2020</h4>
      <conf-convert></conf-convert>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: block;
        background-color: white;
      }

      .inner {
        display: flex;
        width: 100%;
        max-width: 1080px;
        padding: 72px 20px 56px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }

      h2 {
        font-family: "Sansation Bold", sans-serif;
        font-size: 36px;
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

      .divider {
        height: 1px;
        width: 480px;
        max-width: calc(100% - 60px);
        background-color: #ad4acb;
        opacity: 0.3;
        margin: 18px 0 26px;
      }

      h4 {
        font-size: 14px;
        font-weight: 700;
        color: #947da2;
        margin: 0 0 12px;
      }

      @media screen and (max-width: 1080px) {
        :host {
          text-align: center;
        }

        p {
          font-size: 16px;
        }
      }
    `
  ]
})
export class HeaderCtaComponent {}
