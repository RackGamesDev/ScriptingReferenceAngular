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
        path: ':id', //Pasar un parámetro por la url, esta ruta también se podría haber escrito en el módulo home
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
