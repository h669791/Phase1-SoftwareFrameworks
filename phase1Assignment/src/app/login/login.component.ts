import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.username === 'test' && this.password === 'password') {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigate(['/dashboard']);  // Redirect to dashboard after login
    } else {
      console.error('Invalid login');
    }
  }
  
}  