import { Component } from '@angular/core';

@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.scss'],
})
export class ClientReportComponent {
  clients = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' },
  ];

  selectedClient: any;
  startDate!: Date | undefined;
  endDate!: Date | undefined;
  report: any;

  constructor() {
    this.selectedClient = null;
    this.startDate = undefined;
    this.endDate = undefined;
  }

  generateReport() {
    // Call your report generation API or write your own report generation logic
    // using the selectedClient, startDate and endDate values
    // Example:
    if (this.selectedClient && this.startDate && this.endDate) {
      const reportData = [
        { name: 'Project A', hours: 40, amount: 400 },
        { name: 'Project B', hours: 25, amount: 250 },
        { name: 'Project C', hours: 15, amount: 150 },
      ];
      this.report = reportData;
    }
    else {
      this.report = null;
    }
  }
}
