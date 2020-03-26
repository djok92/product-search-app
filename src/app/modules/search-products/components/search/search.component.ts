import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { SearchForm } from "src/app/interfaces/Search-Form";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor() {}

  @Input() form: FormGroup;
  @Output() emitSearchFormValues: EventEmitter<SearchForm> = new EventEmitter();

  ngOnInit() {}

  public sendSearchValues(): void {
    this.emitSearchFormValues.emit(this.form.value);
  }
}
