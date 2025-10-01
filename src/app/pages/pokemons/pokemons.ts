import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  imports: [Card, RouterLink],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {}
