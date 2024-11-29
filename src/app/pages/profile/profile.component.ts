import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service'; // Importamos el servicio de tareas
import { Profile } from '../../profile.model'; // Importamos el modelo Task
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
 title = 'Perfil de Usuario'
 profile!: Profile; //Utilizamos profile! para que no salte el error, ya que se le asignaran valores antes de inicializarce
 editar : boolean= false; //No estamos editando
  // Constructor donde se inyecta el servicio TaskService.
  constructor(private profileservice: ProfileService) {}

  ngOnInit(): void {
    // Cuando se carga el componente, obtenemos el perfil de usuario
    // Actualiza la lista
    this.profile = this.profileservice.getProfile();
  }

  //Cuando pulsamos este boton se habilita la edicion o se deshabilita
  toggleProfileEdit():void{
    this.editar=!this.editar;

    //Si cancelamos, le volvemos a dar al boton antes de guardar
    if(!this.editar){
      //Volvemos a los valores guradados anteriormente
      this.profile = this.profileservice.getProfile();
    }
  }

  /**
   * Guarda los cambios realizados en el perfil del usuario.
   * 
   * Este método envía el perfil actualizado al servicio para almacenarlo y 
   * desactiva el modo de edición, indicando que los cambios han sido finalizados.
   */


  //Guarda los cambios de ediccion
  saveProfile():void{
    this.profileservice.updateProfile(this.profile) //le pasa el perfil con los cambios hechos al servicio
    this.editar=false //salimos del modo edicion
  }

  //resetear perfil
  resetProfile():void{
    this.profileservice.resetProfile(); //reset
    this.profile = this.profileservice.getProfile(); //actualizamos
  }




}
