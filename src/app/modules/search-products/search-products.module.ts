import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchProductsComponent } from "./pages/search-products/search-products.component";
import { SearchComponent } from "./components/search/search.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SearchProductsComponent, SearchComponent],
  imports: [CommonModule, SharedModule]
})
export class SearchProductsModule {}
