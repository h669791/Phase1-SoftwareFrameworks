import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  username = '';
  email = '';
  password = '';
  role = 'user';  // Default role is 'user'

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const success = this.authService.register(this.username, this.email, this.password, this.role);
    if (success) {
      alert('Registration successful');
      this.router.navigate(['/login']);
    } else {
      alert('Registration failed');
    }
  }
}
