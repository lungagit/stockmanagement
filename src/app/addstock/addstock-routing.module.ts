import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstockPage } from './addstock.page';

const routes: Routes = [
  {
    path: '',
    component: AddstockPage
  },
  {
    path: 'add-items',
    loadChildren: () => import('./add-items/add-items.module').then( m => m.AddItemsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstockPageRoutingModule {}
