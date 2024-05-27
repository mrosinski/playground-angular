import {Component, Input} from '@angular/core';
import {CurrencyRate} from "../interfaces/currency-rate";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-currency-tile',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './currency-tile.component.html',
  styleUrl: './currency-tile.component.scss'
})
export class CurrencyTileComponent {
  @Input()
  public currencyRate?: CurrencyRate
}
