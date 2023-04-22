import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public username!: string;
  public password!: string;

  constructor(private http: HttpClient) {

  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(`${baseUrl}/auth/authenticate`, loginRequest);
  }

  logout() {
    const logoutUrl = 'http://localhost:8080/auth/logout';
    return this.http.post(logoutUrl, {});
  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerSuccessfulLogin(username: string, password: string) {
    console.log(`Success!: ` + username + " " + password);
  }

  register(registerRequest: RegisterRequest): Observable<AuthenticatorResponse> {
    return this.http.post<AuthenticatorResponse>(`${baseUrl}/auth/register`, registerRequest);
  }
}

interface RegisterRequest {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface LoginRequest {
  username: string;
  password: string;
}