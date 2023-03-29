import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
@Injectable({
  providedIn: 'root',
})
export class PokemonserviceService {
  Api: string = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  getPokemonByName(nombrePokemon: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.Api}pokemon/${nombrePokemon}`);
  }
}
