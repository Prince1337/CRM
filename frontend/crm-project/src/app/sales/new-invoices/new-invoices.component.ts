import { Component } from '@angular/core';
import { Customer } from 'src/app/customers/customer';

@Component({
  selector: 'app-new-invoices',
  templateUrl: './new-invoices.component.html',
  styleUrls: ['./new-invoices.component.scss']
})
export class NewInvoicesComponent {
  invoice: any = {};
  customers!: Customer[];
  
  onSubmit(form: any) {
  console.log(form);
  // TODO: Save invoice data to database
  }
}
