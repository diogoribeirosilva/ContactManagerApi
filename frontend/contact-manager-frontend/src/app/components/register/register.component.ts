import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface RegisterResponse {
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  credentials = { username: '', password: '' };

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private toastr: ToastrService
  ) {}

  register() {
    this.authService.register(this.credentials).subscribe(
      (response: RegisterResponse) => {
        this.toastr.success('Registration successful!', 'Success');
        this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error('Registration failed. Please try again.', 'Error');
      }
    );
  }
}
