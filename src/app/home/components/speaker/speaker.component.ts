import { Component, Input } from "@angular/core";

@Component({
  selector: "conf-speaker",
  template: `
    <img [attr.src]="speaker.headshotUrl" loading="lazy" />

    <h4>{{ speaker.name }}</h4>
    <h5>{{ speaker.brief }}</h5>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
      }

      img {
        width: 160px;
        height: 160px;
        border-radius: 160px;
        border: 5px solid white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
      }

      h4 {
        font-family: "Sansation Regular", sans-serif;
        font-size: 20px;
        color: #1e012f;
        margin: 16px 0 4px;
      }

      h5 {
        font-weight: 500;
        font-size: 14px;
        color: #5c3275;
      }
    `
  ]
})
export class SpeakerComponent {
  @Input() speaker: any;
}
