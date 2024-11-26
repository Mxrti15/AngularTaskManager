/**
 * Interfaz que define la estructura de una tarea.
 * Se utiliza para asegurar que todos los objetos de tipo Task 
 * tengan los mismos campos: id, title y completed.
 */
export interface Task{
    id: number; //identificador
    title: string; //nombre de la tarea
    completed: boolean; //true o fals para indicar si hemos terminado la tarea
}
