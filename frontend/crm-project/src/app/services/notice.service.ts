import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notice } from '../model/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  private baseUrl = 'http://localhost:8080/notices';

  constructor(private http: HttpClient) { }

  getAllNotices(): Observable<Notice[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Notice[]>(this.baseUrl, { headers });
  }

  getNoticeById(id: number): Observable<Notice> {
    return this.http.get<Notice>(`${this.baseUrl}/${id}`);
  }

  createNotice(notice: Notice): Observable<Notice> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Notice>(this.baseUrl, notice, { headers });
  }

  deleteNotice(id: number): Observable<any> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text', headers });
  }
}
