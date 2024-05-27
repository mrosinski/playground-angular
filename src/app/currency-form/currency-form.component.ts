import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {CurrencyPair} from "../interfaces/currency-pair";

@Component({
  selector: 'app-currency-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './currency-form.component.html',
  styleUrl: './currency-form.component.scss'
})
export class CurrencyFormComponent implements OnInit {
  @Output()
  public currencyPair$ = new EventEmitter<CurrencyPair>();

  public form = this.formBuilder.group({
    from: [''],
    to: [''],
  })

  public constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.form.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe((value) => {
      if (value.from && value.to) {
        this.currencyPair$.emit({
          from: value.from,
          to: value.to,
        })
      }
    })
  }
}
