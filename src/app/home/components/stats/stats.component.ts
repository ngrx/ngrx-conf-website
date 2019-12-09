import { Component } from "@angular/core";

@Component({
  selector: "conf-stats",
  template: `
    <div class="inner">
      <div class="description">
        <h3>More than just state management</h3>
        <p>
          NgRx Conf is a celebration of all things Reactive Angular, including
          state, forms, routing, VR, IoT, and more! Engage with the Reactive
          Angular community, learn directly from the experts, and boost your
          Reactive Angular chops.
        </p>
      </div>

      <div class="stats">
        <h5><em>2</em> Days</h5>
        <h5><em>20</em> Speakers</h5>
        <h5><em>200</em> Attendees</h5>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        padding: 80px 20px;
        background-color: #261928;
        color: white;
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
        font-family: "Sansation Regular", sans-serif;
        font-size: 24px;
        margin: 0 0 12px;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        max-width: 600px;
        line-height: 1.6;
      }

      .stats {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        max-width: 300px;
        text-align: center;
      }

      .stats em {
        display: block;
        font-family: "Sansation Regular", sans-serif;
        font-size: 36px;
        font-weight: 400;
        margin: 0 0 4px;
      }

      @media screen and (max-width: 1080px) {
        .inner {
          flex-direction: column;
        }

        .description {
          margin-bottom: 60px;
        }
      }
    `
  ]
})
export class StatsComponent {}
