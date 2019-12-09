import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeakerComponentModule } from "../speaker/speaker.module";
import { SpeakersComponent } from "./speakers.component";

@NgModule({
  imports: [CommonModule, SpeakerComponentModule],
  declarations: [SpeakersComponent],
  exports: [SpeakersComponent]
})
export class SpeakersComponentModule {}
