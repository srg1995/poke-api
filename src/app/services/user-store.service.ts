import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserStore {
  user: WritableSignal<User | null> = signal(null);

  getName() {
    return this.user;
  }

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
