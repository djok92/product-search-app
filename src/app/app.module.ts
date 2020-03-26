import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SearchProductsModule } from "./modules/search-products/search-products.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
