import {CurrencyPair} from "./currency-pair";

export interface CurrencyRate extends CurrencyPair {
  rate: number
}
