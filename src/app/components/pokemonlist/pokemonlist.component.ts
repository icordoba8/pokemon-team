import { Component } from '@angular/core';
import { PokemonserviceService } from '../../services/pokemonservice.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css'],
})
export class PokemonlistComponent {
  pokemonName: string = 'ditto';
  pokemon: Pokemon = {
    abilities: [],
    name: '',
    sprites: {
      front_default: '',
    },
  };
  team: Pokemon[] = [];
  constructor(private pokemonService: PokemonserviceService) {}
  searchPokemon() {
    this.pokemonService
      .getPokemonByName(this.pokemonName)
      .subscribe((pokemon: Pokemon) => {
        this.pokemon = pokemon;
      });
  }

  addToTeam() {
    if (this.team.length >= 6) {
      alert('Tu equipo Pokémon está completo, no puedes agregar más Pokémons.');
      return;
    }

    const exist: Pokemon | any = this.checkPokemonNameTeam();
    if (exist) {
      alert('Pokémon ya esta en el equipo');
      return;
    }
    this.team.push(this.pokemon);
  }

  checkPokemonNameTeam() {
    return this.team.find(
      (pokemon: Pokemon) => pokemon.name === this.pokemon.name
    );
  }
}
