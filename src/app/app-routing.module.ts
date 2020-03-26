import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchProductsComponent } from "./modules/search-products/pages/search-products/search-products.component";

const routes: Routes = [{ path: "", component: SearchProductsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
