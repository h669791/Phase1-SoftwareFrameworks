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
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.success) {
          localStorage.setItem('authToken', response.token);  // Store the token
          this.router.navigate(['/dashboard']);  // Redirect on success
        } else {
          alert('Login failed: ' + response.message);
        }
      },
      (error) => {
        console.error('Login error', error);  // Log any errors
      }
    );
  }
}  