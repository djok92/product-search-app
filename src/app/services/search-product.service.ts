import { Injectable } from "@angular/core";
import { SearchForm } from "../interfaces/Search-Form";
import { ApiParamsData } from "../interfaces/Api-params-data";
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

  public mapFormValues(formValues: SearchForm): ApiParamsData {
    const category = formValues.searchValue.split(" ")[0];
    const searchQuery = formValues.searchValue
      .split(" ")
      .slice(1)
      .join()
      .replace(",", "");
    return { category, searchQuery };
  }

  public getProductCategories(): Observable<ProductCategory[]> {
    return this.apiService.getData(apiCategories.listCategories);
  }

  public getProducts(query: string): Observable<Product[]> {
    return this.apiService.getData(apiProducts.searchProducts + query);
  }
}
