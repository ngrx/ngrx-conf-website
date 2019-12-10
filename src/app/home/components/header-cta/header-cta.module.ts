import { NgModule } from "@angular/core";
import { ConvertComponentModule } from "../convert";
import { HeaderCtaComponent } from "./header-cta.component";

@NgModule({
  imports: [ConvertComponentModule],
  declarations: [HeaderCtaComponent],
  exports: [HeaderCtaComponent]
})
export class HeaderCtaComponentModule {}
