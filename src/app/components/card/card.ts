import {
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentDialog } from './dialog/dialog';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonStore } from '../../services/pokemon.store';
@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  protected pokemonService = inject(PokemonService);
  protected pokemonStore = inject(PokemonStore);
  protected pokemons = this.pokemonStore.pokemons;

  ngOnInit(): void {
    this.pokemonStore.addPokemons(); 
  }
  loadMore(): void {
    this.pokemonStore.addPokemons();
  }
}
