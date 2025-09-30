import { ChangeDetectionStrategy, Component, inject, Signal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentDialog } from './dialog/dialog';
import { PokemonService } from '../../services/pokemon.service';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  protected pokemonService = inject(PokemonService);

  protected pokemons = toSignal(this.pokemonService.getPokemons());
}
