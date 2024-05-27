import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/currency-rates', pathMatch: 'full'},
  {path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
  {path: 'currency-rates', loadComponent: () => import('./currency-rates/currency-rates.component').then(m => m.CurrencyRatesComponent)},
]
