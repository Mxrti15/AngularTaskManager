import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TasksComponents} from './pages/tasks/tasks.component';
import {ProfileComponents} from './pages/profile/profile.component';

export const routes: Routes = [
    { path:'', component: HomeComponent }, //pagina de inicio
    { path:'tasks', component: TasksComponents },
    { path:'profile', component: ProfileComponents },
];
