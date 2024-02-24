import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginUser, RegisterUser } from '../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  http = inject(HttpClient);
  api = 'http://localhost:8000/auth';

  register(user: RegisterUser): Observable<any> {
    return this.http.post(`${this.api}/register`, user);
  }

  login(user: LoginUser): Observable<any> {
    return this.http.post(`${this.api}/login`, user);
  }
}
