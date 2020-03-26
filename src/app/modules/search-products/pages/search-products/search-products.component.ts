import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { SearchForm } from "src/app/interfaces/Search-Form";
import { SearchProductService } from "src/app/services/search-product.service";
import { ApiParamsData } from "src/app/interfaces/Api-params-data";
import { ProductCategory } from "src/app/interfaces/Product-category";

@Component({
  selector: "app-search-products",
  templateUrl: "./search-products.component.html",
  styleUrls: ["./search-products.component.scss"]
})
export class SearchProductsComponent implements OnInit {
  public searchForm: FormGroup;
  public apiParamsData: ApiParamsData;

  constructor(
    private formBuilder: FormBuilder,
    private searchProductsService: SearchProductService
  ) {
    this.searchForm = this.formBuilder.group({
      searchValue: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public getSearchValues(searchFormValue: SearchForm): void {
    this.apiParamsData = this.searchProductsService.mapFormValues(
      searchFormValue
    );
    this.searchProductsService
      .getProductCategories()
      .subscribe((response: ProductCategory[]) => {
        console.log(response);
      });
  }
}
