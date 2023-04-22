import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from '../model/user-list';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserList[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<UserList[]>(this.baseUrl, { headers });
  }
}
