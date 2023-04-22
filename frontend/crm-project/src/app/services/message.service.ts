import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = 'http://localhost:8080/messages';

  constructor(private http: HttpClient) { }

  getMessagesBySenderIdAndReceiverId(senderId: string, receiverId: string): Observable<Message[]> {
    const url = `${this.apiUrl}/${senderId}/${receiverId}`;
    console.log(url);
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Message[]>(url, { headers });
  }

  saveMessage(message: Message): Observable<Message> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Message>(this.apiUrl, message, { headers });
  }
}
