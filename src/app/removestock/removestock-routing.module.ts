import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemovestockPage } from './removestock.page';

const routes: Routes = [
  {
    path: '',
    component: RemovestockPage
  },
  {
    path: 'remove-items',
    loadChildren: () => import('./remove-items/remove-items.module').then( m => m.RemoveItemsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemovestockPageRoutingModule {}
