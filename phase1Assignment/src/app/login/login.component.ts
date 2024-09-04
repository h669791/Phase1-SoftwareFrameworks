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
    // Example logic for a login process
    if (this.username === 'user' && this.password === 'pass') {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigate(['/profile']);  // Redirect to profile after login
    } else {
      console.error('Invalid login');
    }
  }
  
}  