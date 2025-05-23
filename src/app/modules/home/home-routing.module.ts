import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from '@shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: '', //Al no poner nada se usa la raíz
    component: HomePageComponent, //El componente que se renderizará en esa ruta
    children: [ //En caso de usar subcomponentes (outlets) se ponen aquí
      {
        path: '',
        component: MenuComponent,
        outlet: 'menu-outlet'
      }
    ]
  },
  {
    path: 'lista',
    loadChildren: () => import('../lista/lista.module').then(m => m.ListaModule), //Cargando un módulo en lugar de un componente, de forma lazy
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
