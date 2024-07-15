import { Routes } from '@angular/router';
import { BreedComponent } from './pages/breed/breed.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/breed',
        pathMatch: 'full'
    },
    {
        path: 'breed',
        component: BreedComponent
    },
];
