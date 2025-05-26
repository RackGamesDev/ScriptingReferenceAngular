import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [ //Importaciones de otros modulos y librerias para los submodulos y componentes
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, 
  ]
})
export class HomeModule { 
  
}
