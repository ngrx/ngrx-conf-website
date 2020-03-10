import { Component } from "@angular/core";

@Component({
  selector: "conf-sponsors",
  template: `
    <div class="container">
      <h3>Sponsors</h3>
      <div class="apollo">
        <a href="https://www.nrwl.io" target="_blank">
          <img src="/assets/sponsors/nrwl.png" loading="lazy" alt="Nrwl" />
        </a>
      </div>
      <div class="divider"></div>
      <div class="gemini">
        <a href="https://www.oasisdigital.com" target="_blank">
          <img
            src="/assets/sponsors/oasis-digital.png"
            loading="lazy"
            alt="Oasis Digital"
          />
        </a>
        <a href="https://www.synapsewireless.com" target="_blank">
          <img
            src="/assets/sponsors/synapse.png"
            loading="lazy"
            alt="Synapse Wireless"
          />
        </a>
        <!--<a href="https://www.spacecamp.com" target="_blank">
          <img
            src="/assets/sponsors/space-camp.png"
            loading="lazy"
            alt="Space Camp"
          />
        </a>-->
        <a href="https://www.thisdot.io" target="_blank">
          <img
            src="/assets/sponsors/thisdot.png"
            loading="lazy"
            alt="ThisDot"
          />
        </a>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        width: 100%;
        display: block;
        padding: 60px 20px;
        background-color: #faeaff;
      }

      h3 {
        font-family: "Sansation Bold", sans-serif;
        font-size: 34px;
        width: 100%;
        display: block;
        text-align: center;
        color: #1e012f;
        margin: 0 0 18px;
      }

      img {
        width: 100%;
        height: auto;
      }

      .apollo {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 200px;
        margin: 0 auto;
        padding: 50px 0;
      }

      .divider {
        display: block;
        margin: 0 auto 50px;
        background-color: #ceb1d8;
        width: 100%;
        max-width: 580px;
        height: 1px;
      }

      .gemini {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .gemini a {
        display: inline-block;
        width: 100%;
        max-width: 200px;
        margin: 0 40px;
      }

      @media screen and (max-width: 600px) {
        .gemini {
          flex-direction: column;
        }

        .gemini a {
          margin: 40px 0;
        }
      }
    `
  ]
})
export class SponsorsComponent {}
