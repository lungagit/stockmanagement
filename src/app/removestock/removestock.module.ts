import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemovestockPageRoutingModule } from './removestock-routing.module';

import { RemovestockPage } from './removestock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemovestockPageRoutingModule
  ],
  declarations: [RemovestockPage]
})
export class RemovestockPageModule {}
