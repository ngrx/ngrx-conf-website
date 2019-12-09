import { Component } from "@angular/core";

declare var require: any;

@Component({
  selector: "conf-speakers",
  template: `
    <div class="inner">
      <h3>Meet Our Speakers</h3>
      <div class="speakers">
        <conf-speaker
          *ngFor="let speaker of speakers"
          [speaker]="speaker"
        ></conf-speaker>
      </div>
      <h6>More Speakers Coming Soon!</h6>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: #f9f9f9;
        padding: 80px 20px;
        width: 100%;
      }

      .inner {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
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

      .speakers {
        text-align: center;
      }

      conf-speaker {
        display: inline-block;
        margin: 24px 8px;
      }

      h6 {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        color: #947da2;
        margin: 42px 0 0;
      }
    `
  ]
})
export class SpeakersComponent {
  speakers = shuffle(require("./speakers.json"));
}

function shuffle<T>(list: T[]) {
  for (let index = 0; index < list.length; index++) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    const temp = list[index];
    list[index] = list[newIndex];
    list[newIndex] = temp;
  }

  return list;
}
