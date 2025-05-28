import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCompletaComponent } from './pages/lista-completa/lista-completa.component';
import { ListaEspecificaComponent } from './pages/lista-especifica/lista-especifica.component';
import { MenuComponent } from '@shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCompletaComponent,
    children: [
      {
        path: ':id', //Pasar un parametro por la url, esta ruta tambien se podria haber escrito en el modulo home
        component: ListaEspecificaComponent
      },
      {
        path: '',
        component: MenuComponent,
        outlet: 'menu-outlet'
      }
    ]
  },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaRoutingModule { }
