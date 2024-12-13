import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service'; // Importamos el servicio de tareas
import { Task } from '../../task.model'; // Importamos el modelo Task
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  
  tasks: Task[]= []; // LLista de tareas
  titleComponent = 'Gestión de Tareas';
  newTaskTitle = ''; // Título de la nueva tarea

  private draggedTaskIndex: number | null = null;

// Constructor donde se inyecta el servicio TaskService.
  constructor(private taskService: TaskService) {}

  // hook de ciclo de vida que se ejecuta después de que el componente ha sido inicializado
  //usamos ngOnInit para cargar la lista de tareas desde el servicio cuando carga el componente
  ngOnInit(): void {
    // Cuando se carga el componente, obtenemos la lista de tareas
    // Actualiza la lista
    this.tasks = this.taskService.getTasks();
  }

  /**
   * Maneja el índice del elemento que está siendo arrastrado.
   * @param index - Índice de la tarea que se comienza a arrastrar.
   */
  onDragStart(index: number): void {
    this.draggedTaskIndex = index; // Guardamos el índice de la tarea que se está arrastrando
  }

  /**
   * Permite que el elemento sea un área válida para soltar.
   * @param event - Evento dragover.
   */
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Necesario para permitir el "drop"
  }

  /**
   * Método que se ejecuta cuando un elemento es soltado en una nueva posición.
   * 
   * @param targetIndex - Índice del elemento donde se suelta la tarea arrastrada.
   */
  onDrop(targetIndex: number): void {
    // Comprobamos que hay una tarea siendo arrastrada y que no se suelte en la misma posición
    if (this.draggedTaskIndex !== null && this.draggedTaskIndex !== targetIndex) {
      // Obtenemos la tarea arrastrada
      const draggedTask = this.tasks[this.draggedTaskIndex];
      this.tasks.splice(this.draggedTaskIndex, 1); // Eliminamos 1 la tarea de su posición original draggedTaskIndex
      this.tasks.splice(targetIndex, 0, draggedTask); // Insertamos la tarea(draggedTask) en la nueva posición(targetIndex)
      this.taskService.updateTaskOrder(this.tasks); // Actualizamos el orden de las tareas en el servicio
    }
    this.draggedTaskIndex = null; // Reseteamos el índice arrastrado
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
