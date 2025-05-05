import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation-runtime';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'contenido',
        loadComponent: () =>
            loadRemoteModule('remoteApp', './ComponentRemoto').then((m) => m.AppComponent)
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
