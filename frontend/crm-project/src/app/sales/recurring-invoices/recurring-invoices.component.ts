import { Component } from '@angular/core';
import { Customer } from 'src/app/customers/customer';

@Component({
  selector: 'app-recurring-invoices',
  templateUrl: './recurring-invoices.component.html',
  styleUrls: ['./recurring-invoices.component.css']
})
export class RecurringInvoicesComponent {
  customers!: Customer[];

  onSubmit(form: any) {
    console.log(form);
    // TODO: Save invoice data to database
    }
}
