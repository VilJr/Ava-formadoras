// Em: src/app/tabs/tabs-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    // O caminho aqui deve ser vazio, pois o '/tabs' já foi definido no app-routing.module.ts
    path: '', 
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'api',
        loadChildren: () => import('../api/api.module').then(m => m.ApiPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        // Redirecionamento padrão para a primeira aba
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full'
      }
    ]
  }
  // A segunda rota que estava aqui foi removida por ser incorreta e redundante.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}