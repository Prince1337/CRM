import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-rates',
  templateUrl: './tax-rates.component.html',
  styleUrls: ['./tax-rates.component.scss']
})
export class TaxRatesComponent {

  taxRates = [
    { name: 'Tax Rate 1', rate: 10 },
    { name: 'Tax Rate 2', rate: 15 },
    { name: 'Tax Rate 3', rate: 20 }
  ];

}
