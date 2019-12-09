import { NgModule } from "@angular/core";
import { SpeakerComponentModule } from "../speaker";
import { WorkshopCtaComponent } from "./workshop-cta.component";

@NgModule({
  imports: [SpeakerComponentModule],
  declarations: [WorkshopCtaComponent],
  exports: [WorkshopCtaComponent]
})
export class WorkshopCtaComponentModule {}
