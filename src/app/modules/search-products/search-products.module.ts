import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchProductsComponent } from "./pages/search-products/search-products.component";
import { SearchComponent } from "./components/search/search.component";
import { SharedModule } from "../shared/shared.module";
// import { NgSearchRenderer } from 'ng-search-renderer'

@NgModule({
  declarations: [SearchProductsComponent, SearchComponent],
  imports: [CommonModule, SharedModule]
})
export class SearchProductsModule {}
