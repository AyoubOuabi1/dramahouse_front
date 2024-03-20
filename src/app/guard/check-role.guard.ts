import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {LocalStorgeServiceService} from "../service/local-storage/local-storge-service.service";

export const checkRoleGuard: CanActivateFn = (route, state) => {

   const localStorageService = inject(LocalStorgeServiceService);
  const router = inject(Router);


  const role = localStorageService.getRole();

  if(state.url.startsWith('/dashboard') && role===('ADMIN')){
    return true;
  }else {
    router.navigate(['/unauthorized']);
  }
  return false;
};
