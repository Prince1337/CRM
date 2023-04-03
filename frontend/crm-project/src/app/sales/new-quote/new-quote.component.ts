import { Component } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.scss']
})
export class NewQuoteComponent {
  customers: any[] = []; // Define an empty array of customers
  
  onSubmit(form: any): void {
  // Handle form submission here
  console.log(form.value);
  }
  
  }
  
  
  
  
  
