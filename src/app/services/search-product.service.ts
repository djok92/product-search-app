import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { apiCategories, apiProducts } from "src/environments/environment";
import { Observable } from "rxjs";
import { ProductCategory } from "../interfaces/Product-category";
import { Product } from "../interfaces/Product";

@Injectable({
  providedIn: "root"
})
export class SearchProductService {
  constructor(private apiService: ApiService) {}

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.apiService.getData(apiCategories.listCategories);
  }

  public getProducts(query: string): Observable<Product[]> {
    return this.apiService.getData(apiProducts.searchProducts + query);
  }
}
