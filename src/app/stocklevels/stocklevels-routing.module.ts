import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocklevelsPage } from './stocklevels.page';

const routes: Routes = [
  {
    path: '',
    component: StocklevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocklevelsPageRoutingModule {}
