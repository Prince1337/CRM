import { Component } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {
  invoices = [
    { invoiceNumber: 12345, customer: 'John Doe', invoiceDate: '2022-01-01', dueDate: '2022-01-31', totalAmount: 1000, status: 'Unpaid' },
    { invoiceNumber: 54321, customer: 'Jane Doe', invoiceDate: '2022-02-01', dueDate: '2022-02-28', totalAmount: 2000, status: 'Paid' },
    { invoiceNumber: 98765, customer: 'Bob Smith', invoiceDate: '2022-03-01', dueDate: '2022-03-31', totalAmount: 1500, status: 'Unpaid' },
    { invoiceNumber: 56789, customer: 'Alice Johnson', invoiceDate: '2022-04-01', dueDate: '2022-04-30', totalAmount: 1800, status: 'Paid' },
    ];
}
