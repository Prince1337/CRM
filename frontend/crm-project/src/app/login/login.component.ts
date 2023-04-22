import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loginRequest: LoginRequest = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  handleLogin(): void {
    this.authService.login(this.loginRequest).subscribe(
      (response) => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('access_token', response.access_token);
        alert('Success!');
      },
      (error) => {
        alert('Invalid username or password');
      }
    );
  }

  register() {
    this.router.navigate(['/register']);
  }
}

interface LoginRequest {
  username: string;
  password: string;
}




