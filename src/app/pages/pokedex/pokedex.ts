import { Component, computed, inject } from '@angular/core';
import { Card } from '../../components/card/card';
import { Login } from '../../components/login/login';
import { UserStore } from '../../services/user-store.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  imports: [Login, RouterLink],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {
  protected userStore = inject(UserStore);
  protected isLoged = computed(() => this.userStore.isLoged());
}
