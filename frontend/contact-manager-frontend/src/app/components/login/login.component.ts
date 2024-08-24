import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private toastr: ToastrService
  ) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: LoginResponse) => {
        localStorage.setItem('token', response.token);
        this.toastr.success('Login successful!', 'Success');
        this.router.navigate(['/contacts']);
      },
      error => {
        this.toastr.error('Login failed. Please check your credentials.', 'Error');
      }
    );
  }
}
