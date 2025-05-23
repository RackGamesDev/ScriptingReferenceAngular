import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

//Cada ruta partiendo de la raiz del dominio irá a un módulo, estos módulos luego pueden redirigir a otras rutas
export const routes: Routes = [
    {
        path: '', //Al no poner nada se usa la raíz
        //component: HomePageComponent, //El componente se puede cargar directamente aqui o en el módulo home
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) //En el caso de los módulos, se cargan lazy
    }
];
