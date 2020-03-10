import { Component } from "@angular/core";

@Component({
  selector: "conf-navbar",
  template: `
    <div class="inner">
      <div class="logo">
        <a routerLink="/"><img src="/assets/logo.svg" alt="NgRx Conf"/></a>
      </div>
      <div class="links">
        <a href="https://ti.to/ngrx-conf/2020">Tickets</a>
        <a routerLink="/code-of-conduct">Code of Conduct</a>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
        height: 70px;
        width: 100%;
        background-color: #28172f;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.38);
        z-index: 100;
      }

      .inner {
        width: 100%;
        height: 70px;
        max-width: 1080px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .logo {
        display: flex;
        align-items: center;
      }

      .links a {
        color: white;
        text-decoration: none;
        opacity: 0.7;
        transition: opacity 300ms;
        margin: 0 12px;
      }

      .links a:hover {
        opacity: 1;
      }

      img {
        max-height: 50px;
        width: auto;
      }
    `
  ]
})
export class NavbarComponent {}
