import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-stocklevels',
  templateUrl: './stocklevels.page.html',
  styleUrls: ['./stocklevels.page.scss'],
})
export class StocklevelsPage implements OnInit, OnDestroy {
products: Product[];
  product: Product;
  private productsSub: Subscription;
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.productsSub = this.productsService.products.subscribe( products => {
      this.products = products;
    });
  }
  ngOnDestroy() {
    if (this.productsSub){
      this.productsSub.unsubscribe();
    }
  }
}
