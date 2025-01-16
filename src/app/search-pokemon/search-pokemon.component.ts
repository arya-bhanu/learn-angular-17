import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  map,
  Observable,
  of,
  Subject,
  Subscription,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Pokemon } from './search-pokemon.type';
import { SearchPokemonService } from './search-pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css',
})
export class SearchPokemonComponent implements OnInit, OnDestroy {
  inputString = '';
  subjectPokemon$ = new Subject<string>();
  subsPokemon!: Subscription;
  pokemon$!: Observable<Pokemon>;
  error: string | null = null;
  loading = false;

  constructor(private readonly searchPokemonService: SearchPokemonService) {}

  ngOnInit(): void {
    this.subsPokemon = this.subjectPokemon$
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((val) => {
        this.loading = true;
        this.pokemon$ = this.searchPokemonService.searchPokemon(val).pipe(
          map(
            (res: any) =>
              ({
                name: res.name,
                base_experience: res.base_experience,
                height: res.height,
                id: res.id,
              } as Pokemon)
          ),
          finalize(() => {
            this.loading = false;
          }),
          catchError((err) => {
            console.log(err);
            return throwError(() => err);
          })
        );
      });
  }

  ngOnDestroy(): void {
    this.subsPokemon.unsubscribe();
  }

  searchPokemon(name: string) {
    this.subjectPokemon$.next(name);
  }
}
