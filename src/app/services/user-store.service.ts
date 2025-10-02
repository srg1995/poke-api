import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class UserStore {
  private user: WritableSignal<User | null> = signal(null);

  getUser = () => {
    console.log(this.user());
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
