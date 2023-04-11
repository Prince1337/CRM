import { Component } from '@angular/core';

@Component({
  selector: 'app-recurring-invoices',
  templateUrl: './recurring-invoices.component.html',
  styleUrls: ['./recurring-invoices.component.scss']
})
export class RecurringInvoicesComponent {
  customers!: Customer[];

  onSubmit(form: any) {
    console.log(form);
    // TODO: Save invoice data to database
    }
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}