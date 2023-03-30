import { Component } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  customer!: Customer;

  ngOnInit(): void {
    this.customer = new Customer();
  }

  onSubmit(form: any): void {
    console.log(this.customer);
  }

}
