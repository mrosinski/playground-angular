import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CurrencyPair} from "../interfaces/currency-pair";
import {catchError, defaultIfEmpty, map, Observable} from "rxjs";
import {CurrencyRatesDto} from "../interfaces/api/currency-rates-dto";
import {CurrencyRate} from "../interfaces/currency-rate";

@Injectable({
  providedIn: 'root'
})
export class CurrencyRatesService {
  private readonly BASE_URL = 'https://api.frankfurter.app';

  constructor(private http: HttpClient) {}

  public getRates(pair: CurrencyPair): Observable<CurrencyRate[]> {
    return this.http.get<CurrencyRatesDto>(`${this.BASE_URL}/latest`, {
      params: {
        from: pair.from,
        to: pair.to
      },
    }).pipe(
      map(dto => Object.entries(dto.rates)
        .map(([currency, rate]) => ({ from: dto.base, to: currency, rate }))),
      catchError(() => []),
      defaultIfEmpty([])
    )
  }
}
