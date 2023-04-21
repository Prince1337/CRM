import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.registerRequest)
      .subscribe(
        (result) => {
          this.router.navigate(['/dashboard']);
          console.log(result);
        },
        (error) => {
          alert('Invalid');
          console.log(error);
        }
      );
  }

}

interface RegisterRequest {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
