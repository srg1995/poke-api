import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Pokemon, PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonStore {
  public pokemons: WritableSignal<Pokemon[]> = signal([]);
  protected offset: WritableSignal<number> = signal(0);
  protected pokemonService = inject(PokemonService);

  addPokemons(): void {
    this.pokemonService.getPokemons(20, this.offset()).subscribe((pokemons) => {
      this.pokemons.update((prev) => [...prev, ...pokemons]);
    });
    this.offset.set(this.offset() + 20);
  }
  getPokemons(): Pokemon[] {
    return this.pokemons();
  }
}
