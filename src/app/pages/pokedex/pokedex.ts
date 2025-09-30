import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-pokedex',
  imports: [Card],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex {}
