import { Injectable } from '@angular/core';
import { Task } from './task.model';  // Importamos la interfaz Task

// Servicio que gestiona las tareas, lo puedeinyectar en cualquir componente o servicio que lo necesite
@Injectable({
  providedIn: 'root' // Indica que el servicio es singleton y estará disponible en toda la aplicación
})
export class TaskService {

  // Lista privada de tareas inicial (puede ser reemplazada por una llamada a un backend en el futuro)
  private tasks: Task[] = [
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: true }
  ];

  // Función que obtiene la lista completa de tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  //Funcion para agregar una nueva tarea
  //Task es el modelo/objeto
  addTask(title: string): void{
    const newTask: Task = {
      id: this.tasks.length + 1, // Generar un ID simple (poemos usar una librería como uuid)
      title,
      completed: false
    };
    this.tasks.push(newTask); //Añade la tarea al final
  }

  //Elimina una tarea por id
  deleteTask(id: number) :void{
    this.tasks = this.tasks.filter(task=> task.id !==id) // Filtra la lista para excluir la tarea con el ID proporcionado
  }

  //Cambia el estado de la tarea (Completa o incompleta)
  toggleTaskCompletion(id: number) :void{
    const task = this.tasks.find(t=> t.id ===id) // Busca la tarea por su ID
    if (task) {
      task.completed=!task.completed;
    }
  }
  //constructor() { }
}
