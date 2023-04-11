import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataservice.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer!: Customer;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.customer = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      createdAt: new Date()
    }
  }

  onSubmit(form: any): void {
    this.customer.createdAt = new Date();
    this.dataService.saveData([...this.dataService.getData("customers"), this.customer], "customers");
    console.log(this.customer);
  }
}

interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}
