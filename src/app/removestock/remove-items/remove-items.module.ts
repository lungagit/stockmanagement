import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveItemsPageRoutingModule } from './remove-items-routing.module';

import { RemoveItemsPage } from './remove-items.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RemoveItemsPageRoutingModule
  ],
  declarations: [RemoveItemsPage]
})
export class RemoveItemsPageModule {}
