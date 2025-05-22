import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './modules/example/example.component';

export const routes: Routes = [
    {
        path: 'example',
        component: ExampleComponent
    }
];
