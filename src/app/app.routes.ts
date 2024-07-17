import { Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/users/1',
        pathMatch: 'full'
    },
    {
        path: 'users/:userId',
        component: ProfileCardComponent
    },
    {
        path: '**',
        component: PagenotfoundComponent
    }
];
