import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable, map } from 'rxjs';
import { Contact } from '../model/contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { RecurringInvoice } from '../model/recurring-invoice';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  

  createCustomer(customer: Customer): Observable<any> {
    const token = localStorage.getItem('access_token');
    console.log(token);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log(`header: ` + headers.get('Authorization'));
    return this.http.post(`${baseUrl}/customers/create`, customer, { headers });
  }

  getCustomers(): Observable<Customer[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log(`header: ` + headers.get('Authorization'));
    return this.http.get<any>(`${baseUrl}/customers`, { headers });
  }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${baseUrl}/contacts`);
  }

  saveData(array: any, STORAGE_KEY: string): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(array));
  }

  getData(STORAGE_KEY: string): any[] {
    const dataString = sessionStorage.getItem(STORAGE_KEY);
    if (dataString) {
      return JSON.parse(dataString);
    } else {
      return [];
    }
  }

  getAllInvoices(): Observable<RecurringInvoice[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);

    return this.http.get<GetRecurringInvoicesResponse>(`${baseUrl}/recurring-invoices/get`, { headers }).pipe(
      map(response => response._embedded.recurringInvoices)
    );
  }

  createInvoice(invoice: RecurringInvoice): Observable<RecurringInvoice> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<RecurringInvoice>(`${baseUrl} /recurring-invoices/create`, invoice, { headers });
  }

  updateInvoice(invoice: RecurringInvoice): Observable<RecurringInvoice> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.put<RecurringInvoice>(`${ baseUrl } / update`, invoice, { headers });
  }

  deleteInvoice(invoiceNumber: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete(`${ baseUrl } / ${ invoiceNumber }`, { headers });
  }
}

interface GetRecurringInvoicesResponse {
  _embedded: {
    recurringInvoices: RecurringInvoice[];
  }
}
