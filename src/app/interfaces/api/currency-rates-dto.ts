export interface CurrencyRatesDto {
  amount: number
  base: string
  date: string
  rates: Record<string, number>
}
