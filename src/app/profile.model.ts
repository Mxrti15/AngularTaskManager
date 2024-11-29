/**
 * Interfaz que define la estructura de una tarea.
 * Se utiliza para asegurar que todos los objetos de tipo Task 
 * tengan los mismos campos: name, email, bio
 */
export interface Profile{
    name: string; //nombre del usuario
    email: string; //correo del usuario
    bio: string; //biografia del usuario
}