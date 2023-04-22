import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectUrl = 'http://localhost:8080/projects';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Project[]>(this.projectUrl, {headers});
  }

  getProjectById(id: number): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url);
  }

  saveProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.projectUrl, project);
  }

  deleteProjectById(id: number): Observable<void> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
