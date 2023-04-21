import { Component, OnInit } from '@angular/core';
import { RecurringInvoice } from 'src/app/model/recurring-invoice';
import { DataService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-recurring-invoices',
  templateUrl: './recurring-invoices.component.html',
  styleUrls: ['./recurring-invoices.component.scss']
})
export class RecurringInvoicesComponent implements OnInit {

  recurringInvoices!: RecurringInvoice[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices(): void {
    this.dataService.getAllInvoices()
      .subscribe((recurringInvoices: RecurringInvoice[]) => {
        this.recurringInvoices = recurringInvoices;
      });
  }

  createInvoice(recurringInvoice: RecurringInvoice): void {
    this.dataService.createInvoice(recurringInvoice)
      .subscribe((createdInvoice: RecurringInvoice) => {
        this.recurringInvoices.push(createdInvoice);
      });
  }

  updateInvoice(recurringInvoice: RecurringInvoice): void {
    this.dataService.updateInvoice(recurringInvoice)
      .subscribe((updatedInvoice: RecurringInvoice) => {
        const index = this.recurringInvoices.findIndex(i => i.invoiceNumber === updatedInvoice.invoiceNumber);
        if (index !== -1) {
          this.recurringInvoices[index] = updatedInvoice;
        }
      });
  }

  deleteInvoice(invoiceNumber: number): void {
    this.dataService.deleteInvoice(invoiceNumber)
      .subscribe(() => {
        this.recurringInvoices = this.recurringInvoices.filter(i => i.invoiceNumber !== invoiceNumber);
      });
  }
}