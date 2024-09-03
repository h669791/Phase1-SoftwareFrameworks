import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const user = this.authService.login(this.username, this.password);
    if (user) {
      // Redirect based on role
      switch (user.role) {
        case 'super-admin':
          this.router.navigate(['/super-admin-dashboard']);
          break;
        case 'group-admin':
          this.router.navigate(['/group-admin-dashboard']);
          break;
        case 'user':
          this.router.navigate(['/user-dashboard']);
          break;
        default:
          alert('Invalid role');
      }
    } else {
      alert('Invalid username or password');
    }
  }
}
