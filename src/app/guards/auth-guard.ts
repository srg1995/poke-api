import { CanActivateFn, Router } from '@angular/router';
import { UserStore } from '../services/user-store.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const userStore = inject(UserStore);
  const router = inject(Router);
  const user = userStore.getUser();

  const token = user?.getIdToken().then((token: string) => token);

  if (token) {
    return true;
  } else {
    return router.navigate(['']);
  }
};
