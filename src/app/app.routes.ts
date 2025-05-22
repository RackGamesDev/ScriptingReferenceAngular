import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Cada ruta partiendo de la raiz del dominio irá a un módulo, estos módulos luego pueden redirigir a otras rutas
export const routes: Routes = [
    {
        path: '',
        //component: ExampleComponent
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) //En el caso de los módulos, se cargan lazy
    }
];
