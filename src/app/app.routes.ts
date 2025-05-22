import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        //component: ExampleComponent
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
