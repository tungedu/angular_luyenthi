import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface DecodedJwtPayload extends JwtPayload {
  _id: string;
}

export const adminGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token');
  const router = inject(Router);
  if (token) {
    const decoded = jwtDecode(token) as DecodedJwtPayload;

    if (decoded._id === '65d952c93a6980153816d1d1') {
      return true;
    }
    alert('You are not authorized to view this page');
  }
  router.navigate(['/login']);
  return false;
};
