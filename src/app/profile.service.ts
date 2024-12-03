import { Injectable } from '@angular/core';
import { Profile } from './profile.model';  // Importamos la interfaz Task

// Servicio que gestiona las tareas, lo puedeinyectar en cualquir componente o servicio que lo necesite
@Injectable({
  providedIn: 'root' // Indica que el servicio es singleton y estará disponible en toda la aplicación
})
export class ProfileService {

  //Usuario
  private profile: Profile={
    name: 'Carlos Garcia',
    email: 'carlosgarcia@gmail.com',
    bio: 'Desarrollador frontend en Angular'
  };

  getProfile():Profile{
    return {...this.profile}; //Retorna UNA COPIA del perfil
  }

  /**
   * Actualiza el perfil local con nuevos datos.
   * 
   * @param updatedProfile - Objeto `Profile` que contiene la información actualizada.
   * 
   * Este método sustituye el contenido actual de la propiedad `profile` 
   * con una copia del perfil actualizado, asegurando que los cambios sean inmutables.
   */

  //Actualiza el perfil
  updateProfile(updatedProfile: Profile):void{
    this.profile = { ...updatedProfile }; // Actualiza `profile` con una copia del perfil actualizado.
  }

  // Resetea el perfil a vacio
  resetProfile():void{
    this.profile={
      name: '',
      email: '',
      bio: ''
    };
  }
  constructor() { }
}
