import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'addstock',
    pathMatch: 'full'
  },
  {
    path: 'addstock',
    loadChildren: () => import('./addstock/addstock.module').then( m => m.AddstockPageModule)
  },
  {
    path: 'removestock',
    loadChildren: () => import('./removestock/removestock.module').then( m => m.RemovestockPageModule)
  },
  {
    path: 'stocklevels',
    loadChildren: () => import('./stocklevels/stocklevels.module').then( m => m.StocklevelsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
