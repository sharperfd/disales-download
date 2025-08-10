import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { mode: 'prod' } },
  { path: 'uat', component: HomeComponent, data: { mode: 'uat' } },
  { path: '**', redirectTo: '' }
];
