import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
  };
  authService = inject(AuthService);
  router = inject(Router);

  handleSubmit() {
    console.log(this.user);
    if (!this.user.name || !this.user.email || !this.user.password) {
      return alert('Please fill in all fields');
    }
    console.log(this.user);
    this.authService.register(this.user).subscribe(() => {
      alert('Register success');
      this.router.navigate(['/login']);
    });
  }
}
