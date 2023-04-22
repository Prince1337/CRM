import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentClass } from '../model/document-class';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documentsUrl = 'http://localhost:8080/documents';

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<DocumentClass[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<DocumentClass[]>(this.documentsUrl, {headers});
  }

  createDocument(document: DocumentClass): Observable<DocumentClass> {
    return this.http.post<DocumentClass>(this.documentsUrl, document);
  }

  updateDocument(id: number, document: DocumentClass): Observable<DocumentClass> {
    const url = `${this.documentsUrl}/${id}`;
    return this.http.put<DocumentClass>(url, document);
  }

  deleteDocument(id: number): Observable<void> {
    const url = `${this.documentsUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
