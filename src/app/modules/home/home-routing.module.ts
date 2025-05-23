import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from '@shared/components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [ //Aquí se especifican los subcomponentes
      {
        path: '',
        component: MenuComponent,
        outlet: 'menu-outlet' //Siendo un outlet, no se carga el componente accediendo mediante la ruta sino renderizándolo en otr componente
      }
    ]
    //loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'lista',
    //component: 
    loadChildren: () => import('../lista/lista.module').then(m => m.ListaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
