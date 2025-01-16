import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

export const routes: Routes = [
  { path: 'post/:id', component: PostComponent },
  { path: '', component: HomeComponent },
  { path: 'pokemon', component: SearchPokemonComponent },
];
