import { Routes } from '@angular/router';
import { BreedComponent } from './pages/breed/breed.component';

export const routes: Routes = [
    {
        path: '',
        component: BreedComponent
        // loadChildren: () => import('./dogs/dogs.module').then(m => m.DogsModule)
    }
];
