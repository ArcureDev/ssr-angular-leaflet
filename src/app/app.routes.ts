import { Routes } from '@angular/router';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'un',
    loadComponent: () => import('./un/un.component').then(c => c.UnComponent),
  }
];
