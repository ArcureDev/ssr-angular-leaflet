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
    children: [
      {
        path: '',
        redirectTo: 'deux',
        pathMatch: 'full',
      },
      {
        path: 'deux',
        loadComponent: () => import('./deux/deux.component').then(c => c.DeuxComponent),
      },
    ]
  }
];
