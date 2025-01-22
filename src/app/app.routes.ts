import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'image',
    loadChildren: () =>
      import('./test-image/test-image.module').then((m) => m.TestImageModule),
  },
];
