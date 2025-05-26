import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from '@shared/components/menu/menu.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  {
    path: '', //Al no poner nada se usa la raiz
    component: HomePageComponent, //El componente que se renderizara en esa ruta
    children: [ //En caso de usar subcomponentes (outlets) se ponen aqui
      {
        path: '',
        component: MenuComponent,
        outlet: 'menu-outlet'
      }
    ]
  },
  {
    path: 'lista',
    loadChildren: () => import('../lista/lista.module').then(m => m.ListaModule), //Cargando un modulo en lugar de un componente, de forma lazy
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: '**', //Cualquier ruta que no coincida con las anteriores, util para 404
    redirectTo: '' //Redirige a otro path
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
