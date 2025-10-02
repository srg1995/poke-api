import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pokedex/pokedex').then((m) => m.Pokedex),
  },
  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons').then((m) => m.Pokemons),
    canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
