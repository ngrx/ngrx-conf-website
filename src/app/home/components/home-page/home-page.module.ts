import { NgModule } from "@angular/core";
import { HeaderArtComponentModule } from "../header-art";
import { HeaderCtaComponentModule } from "../header-cta";
import { StatsComponentModule } from "../stats";
import { SpeakersComponentModule } from "../speakers";
import { VenueComponentModule } from "../venue";
import { SponsorCtaComponentModule } from "../sponsor-cta";
import { WorkshopCtaComponentModule } from "../workshop-cta";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  imports: [
    HeaderArtComponentModule,
    HeaderCtaComponentModule,
    StatsComponentModule,
    SpeakersComponentModule,
    VenueComponentModule,
    SponsorCtaComponentModule,
    WorkshopCtaComponentModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
  entryComponents: [HomePageComponent]
})
export class HomePageComponentModule {}
