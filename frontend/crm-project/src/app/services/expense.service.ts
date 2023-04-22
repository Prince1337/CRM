import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = 'http://localhost:8080/expenses';

  constructor(private http: HttpClient) { }

  getAllExpenses(): Observable<Expense[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Expense[]>(`${this.baseUrl}`, {headers});
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(`${this.baseUrl}`, expense);
  }

  deleteExpense(id: number): Observable<void> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete<void>(`${this.baseUrl}/${id}`, {headers});
  }
}
