import {
  Component,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentDialog } from './dialog/dialog';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonStore } from '../../services/pokemon.store';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatDialogModule, MatButtonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  readonly dialog = inject(MatDialog);
  private platformId = inject(PLATFORM_ID);
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  @ViewChild('anchor', { static: true }) anchor!: ElementRef<HTMLDivElement>;
  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.loadMore();
        }
      },
      { threshold: 0.5 } // cuando se vea el 50% del div
    );

    observer.observe(this.anchor.nativeElement);
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

