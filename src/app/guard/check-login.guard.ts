import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const checkLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const user= localStorage.getItem('user');
  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
