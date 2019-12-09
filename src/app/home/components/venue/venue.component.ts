import { Component } from "@angular/core";

@Component({
  selector: "conf-venue",
  template: `
    <div class="inner">
      <h2>U.S. Space &amp; Rocket Center</h2>
      <p>
        Our incredible venue is the home of SPACE CAMP and one of the largest
        exhibits of space history artifacts, including a Saturn V rocket, the
        Apollo 16 Space Capsule, and more.
      </p>
      <p>
        The U.S. Space &amp; Rocket Center sits at the heart of Huntsville,
        Alabama, nicknamed the “Rocket City” for its association with early
        space rocketry development and is the continued home of the Marshall
        Space Flight Center. Huntsville is one of the largest tech centers in
        the American south east hosting companies like Northrup Grumman, ADTRAN,
        Boeing, and Blue Origin.
      </p>

      <ul class="address">
        <li>U.S. Space &amp; Rocket Center</li>
        <li>1 Tranquility Base</li>
        <li>Huntsville, AL 35805</li>
      </ul>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        background-color: #241b27;
        padding: 0px 20px;
        color: white;
      }

      .inner {
        width: 100%;
        max-width: 1080px;
        padding: 120px 0;
        display: block;
        margin: 0 auto;
        background-image: url("/assets/rocket-center.jpg");
        background-position: top right;
        background-repeat: no-repeat;
      }

      h2 {
        font-size: 24px;
        font-family: "Sansation Regular", sans-serif;
        margin: 0 0 16px;
      }

      p {
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
        max-width: 470px;
        margin: 0 0 8px;
      }

      .address {
        margin: 60px 0 0;
        font-weight: 300;
        color: #dc85f6;
      }

      .address li {
        margin-bottom: 8px;
      }

      .address li:first-of-type {
        font-weight: 500;
      }
    `
  ]
})
export class VenueComponent {}
