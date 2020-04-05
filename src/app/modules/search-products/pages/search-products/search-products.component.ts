import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SearchProductService } from 'src/app/services/search-product.service';
import { ProductCategory } from 'src/app/interfaces/Product-category';
import { Product } from 'src/app/interfaces/Product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { SearchFormData } from 'src/app/interfaces/Search-form-data';
import { Category } from 'ng-search-renderer';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {
  public timesIcon = faTimes;
  public searchIcon = faSearch;
  public syncIcon = faSync;

  public searchForm: FormGroup;
  public searchFormData: SearchFormData;
  public searchQuery: string;
  public activeCategoryName: string;
  public categories: ProductCategory[];
  public products: Product[];
  public hasPluginHandlerForCategory: boolean;
  public showSyncButton: boolean;
  public searchMode: 'new' | 'refresh';

  constructor(private formBuilder: FormBuilder, private searchProductsService: SearchProductService) {
    this.searchForm = this.formBuilder.group({
      searchValue: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.searchProductsService.getProductCategories().subscribe((categories: ProductCategory[]) => {
      this.categories = categories;
    });
  }

  public getSearchValues(searchFormValue: SearchFormData): void {
    this.searchFormData = searchFormValue;
    this.searchQuery = this.searchFormData.searchQuery;
    this.searchProductsService.getProducts(this.searchQuery).subscribe((products: Product[]) => {
      this.products = products;
      this.searchMode = 'new';
      this.activeCategoryName = this.searchFormData.activeCategoryName;
      this.hasPluginHandlerForCategory = this.checkIfHasPluginHandler(this.activeCategoryName);
      this.showSyncButton = this.checkIfShowSyncButton();
    });
  }

  public refreshResults(): void {
    this.searchProductsService.getProducts(this.searchQuery).subscribe((products: Product[]) => {
      //We will get same results, because API always gives same results for given parameters
      //shuffleArray simulates new results from API
      this.products = this.shuffleArray(products);
      this.searchMode = 'refresh';
    });
  }

  public clearSearchValues(): void {
    this.searchForm.reset();
  }

  private checkIfShowSyncButton(): boolean {
    return this.products && this.products.length && this.hasPluginHandlerForCategory;
  }

  private checkIfHasPluginHandler(activeCategoryName): boolean {
    return this.categories.some((category: Category) => category.name.toLowerCase() === activeCategoryName.toLowerCase());
  }

  private shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
