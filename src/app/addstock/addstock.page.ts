import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { AddItemsPage } from './add-items/add-items.page';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.page.html',
  styleUrls: ['./addstock.page.scss'],
})
export class AddstockPage implements OnInit, OnDestroy {
  products: Product[];
  product: Product;
  private productsSub: Subscription;
  constructor(private productsService: ProductService,
              public modalController: ModalController) { }

  ngOnInit() {
    this.productsSub = this.productsService.products.subscribe( products => {
      this.products = products;
    });
  }

  //Present a modal to allow the user to enter items for a product
  async presentAddItemsModal(product: Product) {
    const modal = await this.modalController.create({
    component: AddItemsPage,
    cssClass: 'my-custom-class',
    componentProps: {
      selectedProduct: product
      }
    });
    return await modal.present();
  }
  ngOnDestroy() {
    if (this.productsSub){
      this.productsSub.unsubscribe();
    }
  }

}
