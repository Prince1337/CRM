import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService : AuthService, private router: Router) { }

  logout() {
    this.authService.logout().subscribe(
      () => {
        // Clear user token, session data, etc.
        localStorage.removeItem('access_token');
        alert('Logout successful');
        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        alert(error);
      }
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

}
