import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private user: WritableSignal<User | null> = signal(null);
  private auth = inject(Auth);

  private init = onAuthStateChanged(this.auth, (user) => {
    this.user.set(user);
  });

  getUser = () => {
    return this.user();
  };

  addUser(user: User) {
    this.user.set(user);
  }
  deleteUser() {
    this.user.set(null);
  }
  isLoged = () => {
    return this.user();
  };
}
