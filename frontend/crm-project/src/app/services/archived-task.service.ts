import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArchivedTask } from '../model/archived-task';

@Injectable({
  providedIn: 'root'
})
export class ArchivedTaskService {

  private apiUrl = 'http://localhost:8080/archivedTasks';

  constructor(private http: HttpClient) { }

  getAllArchivedTasks(): Observable<ArchivedTask[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<ArchivedTask[]>(this.apiUrl, {headers});
  }

  getArchivedTaskById(id: number): Observable<ArchivedTask> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ArchivedTask>(url);
  }

  saveArchivedTask(archivedTask: ArchivedTask): Observable<ArchivedTask> {
    return this.http.post<ArchivedTask>(this.apiUrl, archivedTask);
  }

  deleteArchivedTaskById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
