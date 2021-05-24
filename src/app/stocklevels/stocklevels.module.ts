import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocklevelsPageRoutingModule } from './stocklevels-routing.module';

import { StocklevelsPage } from './stocklevels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocklevelsPageRoutingModule
  ],
  declarations: [StocklevelsPage]
})
export class StocklevelsPageModule {}
