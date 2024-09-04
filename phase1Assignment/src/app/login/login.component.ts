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
      (response: any) => {
        if (response.ok) {
          // Store the token in localStorage
          this.authService.saveToken(response.token);

          // Navigate to the dashboard or another route after login
          this.router.navigate(['/dashboard']);
        } else {
          alert('Invalid credentials');
        }
      },
      error => {
        console.error('Login error', error);
      }
    );
  }
}
