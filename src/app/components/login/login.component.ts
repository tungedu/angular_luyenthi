import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  authService = inject(AuthService);
  router = inject(Router);

  handleSubmit() {
    console.log(this.user);
    if (!this.user.email || !this.user.password) {
      return alert('Please fill in all fields');
    }
    this.authService.login(this.user).subscribe((res) => {
      console.log(res);
      alert('Login success');
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['/admin/products']);
    });
  }
}
