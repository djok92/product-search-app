import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, AbstractControl } from "@angular/forms";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { SearchFormData } from "src/app/interfaces/Search-form-data";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor() {}

  public hasGeneratedActiveCategory = false;
  public activeCategoryName: string | null = null;

  @Input() form: FormGroup;
  @Input() timesIcon: IconDefinition;
  @Input() searchIcon: IconDefinition;
  @Output() emitSearchFormValues: EventEmitter<
    SearchFormData
  > = new EventEmitter();
  @Output() emitClearSearchValues: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  get searchValueControl(): AbstractControl {
    return this.form.controls.searchValue;
  }

  public sendSearchValues(): void {
    this.emitSearchFormValues.emit({
      activeCategoryName: this.activeCategoryName,
      searchQuery: this.form.value.searchValue
    });
  }

  public clearSearchValues(): void {
    this.emitClearSearchValues.emit();
  }

  public clearAllValues(): void {
    this.emitClearSearchValues.emit();
    this.activeCategoryName = null;
    this.hasGeneratedActiveCategory = false;
  }

  public handleKeyup(event: any): void {
    if (
      (event.keyCode === 32 || event.keyCode === 13) &&
      !this.hasGeneratedActiveCategory
    ) {
      this.hasGeneratedActiveCategory = true;
      this.activeCategoryName = this.generateActiveCategoryName();
      this.clearSearchValues();
    } else if (event.keyCode === 13 && this.hasGeneratedActiveCategory) {
      this.sendSearchValues();
    }
  }

  public generateActiveCategoryName(): string {
    return this.form.value.searchValue;
  }
}
