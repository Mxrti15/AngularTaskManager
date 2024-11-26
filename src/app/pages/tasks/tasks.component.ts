import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service'; // Importamos el servicio de tareas
import { Task } from '../../task.model'; // Importamos el modelo Task
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  
  tasks: Task[]= []; // LLista de tareas
  titleComponent = 'Gestión de Tareas';
  newTaskTitle = ''; // Título de la nueva tarea

// Constructor donde se inyecta el servicio TaskService.
  constructor(private taskService: TaskService) {}

  // hook de ciclo de vida que se ejecuta después de que el componente ha sido inicializado
  //usamos ngOnInit para cargar la lista de tareas desde el servicio cuando carga el componente
  ngOnInit(): void {
    // Cuando se carga el componente, obtenemos la lista de tareas
    this.tasks = this.taskService.getTasks();
  }

  //Añadir tarea
  addTask(): void {
    if (this.newTaskTitle.trim()) { // Evitar agregar tareas vacías
      this.taskService.addTask(this.newTaskTitle);
      this.tasks = this.taskService.getTasks(); // Recargar la lista de tareas
      this.newTaskTitle = ''; // Limpiar el campo de entrada
    }
  }

   /**
   * Método para eliminar una tarea por su ID
   */
   deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks(); // Recargamos las tareas después de eliminar
  }

  /**
   * Método para alternar el estado de la tarea (completada/no completada)
   */
  toggleTaskCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
    this.tasks = this.taskService.getTasks(); // Recargamos las tareas después de actualizar
  }

  
}
