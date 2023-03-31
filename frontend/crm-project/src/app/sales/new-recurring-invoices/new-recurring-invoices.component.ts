import { Component } from '@angular/core';

@Component({
  selector: 'app-new-recurring-invoices',
  templateUrl: './new-recurring-invoices.component.html',
  styleUrls: ['./new-recurring-invoices.component.scss']
})
export class NewRecurringInvoicesComponent {
  customers = [
    { id: 'customer1', name: 'Customer 1' },
    { id: 'customer2', name: 'Customer 2' },
    { id: 'customer3', name: 'Customer 3' }
  ];

  onSubmit(form: any): void {
    console.log('Form submitted:', form);
  }
}
