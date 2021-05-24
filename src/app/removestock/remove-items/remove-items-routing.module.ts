import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoveItemsPage } from './remove-items.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoveItemsPageRoutingModule {}
