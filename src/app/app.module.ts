import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponentModule } from "./common/components/navbar";
import { FooterComponentModule } from "./common/components/footer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    FooterComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
