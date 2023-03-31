import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  quotes = [    {      number: 'Q0001',      customerName: 'John Doe',      amount: '$1000',      date: '2023-03-29'    },    {      number: 'Q0002',      customerName: 'Jane Smith',      amount: '$2500',      date: '2023-03-30'    },    {      number: 'Q0003',      customerName: 'Bob Johnson',      amount: '$500',      date: '2023-03-31'    }  ];
}
