import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {ProfileComponent} from './pages/profile/profile.component';

/**
 * Definición de rutas principales de la aplicación.
 */
export const routes: Routes = [
    { path:'', component: HomeComponent }, //pagina de inicio
    { path:'tasks', component: TasksComponent },
    { path:'profile', component: ProfileComponent },
    { path:'**', redirectTo: ''} // Redirigir rutas no encontradas a la página de inicio
    
];
