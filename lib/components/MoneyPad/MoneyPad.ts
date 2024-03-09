export interface MoneyPadConfig {
  locale?: string;
  currency?: string;
  padValue?: (string | number)[][];
  maxDigits?: number;
}
