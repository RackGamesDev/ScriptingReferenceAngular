import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [ //Importaciones de otros modulos y librerias para los submodulos y componentes
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ]
})
export class HomeModule { 
  
}
