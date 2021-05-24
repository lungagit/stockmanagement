import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { RemoveItemsPage } from './remove-items/remove-items.page';

@Component({
  selector: 'app-removestock',
  templateUrl: './removestock.page.html',
  styleUrls: ['./removestock.page.scss'],
})
export class RemovestockPage implements OnInit, OnDestroy {
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
  //Present a modal to allow the user to remove some items form a product
  async presentRemoveItemsModal(product: Product) {
    const modal = await this.modalController.create({
    component: RemoveItemsPage,
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
