import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchPokemonService {
  private readonly url = 'https://pokeapi.co/api/v2';
  constructor(private readonly http: HttpClient) {}

  searchPokemon(q: string) {
    return this.http.get(`${this.url}/pokemon/${q}`);
  }
}
