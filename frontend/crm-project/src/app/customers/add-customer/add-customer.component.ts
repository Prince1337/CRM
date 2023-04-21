import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { Customer } from 'src/app/model/customer';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent {
  customer: Customer = new Customer();

  constructor(private dataService: DataService) { }

  onSubmit(): void {
    this.dataService.createCustomer(this.customer).subscribe((response: any) => {
      console.log(this.customer + response);
    });
  }
}