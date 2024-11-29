import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Importa las rutas definidas
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProfileComponent],  // Importa RouterModule para el enrutamiento
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'angular-task-manager';
}
