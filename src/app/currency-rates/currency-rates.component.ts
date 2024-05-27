import { Component } from '@angular/core';
import {CurrencyRate} from "../interfaces/currency-rate";
import {CurrencyRatesService} from "../services/currency-rates.service";
import {CurrencyPair} from "../interfaces/currency-pair";
import {CurrencyFormComponent} from "../currency-form/currency-form.component";
import {CurrencyTileComponent} from "../currency-tile/currency-tile.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-currency-rates',
  standalone: true,
  imports: [
    CurrencyFormComponent,
    CurrencyTileComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './currency-rates.component.html',
  styleUrl: './currency-rates.component.scss'
})
export class CurrencyRatesComponent {
  public rates: CurrencyRate[] = []

  public constructor(private ratesService: CurrencyRatesService) {}

  public onCurrencyPairChanged(pair: CurrencyPair) {
    this.ratesService.getRates(pair).subscribe(rates => this.rates = rates)
  }
}
