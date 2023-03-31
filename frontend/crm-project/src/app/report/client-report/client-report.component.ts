import { Component } from '@angular/core';

@Component({
  selector: 'app-client-report',
  templateUrl: './client-report.component.html',
  styleUrls: ['./client-report.component.scss']
})
export class ClientReportComponent {
  clients = [
    { id: 1, name: 'Client A' },
    { id: 2, name: 'Client B' },
    { id: 3, name: 'Client C' }
  ];

  selectedClient: any;
  startDate!: Date;
  endDate!: Date;
  report: any;

  generateReport() {
    // Logic to generate report based on selectedClient, startDate and endDate
    // Assign the report to this.report
  }
}
