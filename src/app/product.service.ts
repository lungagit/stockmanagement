import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products = new BehaviorSubject<Product[]>([
    new Product(
      'p1',
      'PRODUCT1',
      0,
      0
    ),
    new Product(
      'p2',
      'PRODUCT2',
      0,
      0
    ),
    new Product(
      'p3',
      'PRODUCT3',
      0,
      0
    ),

  ])
  constructor() { }
  get products(){

    return this._products.asObservable();

  }
  addStock(
    productId: string,
    name: string,
    items: number,
    price: number,
    ){
      return this.products.pipe(take(1), tap(products => {
        const updatedProductIndex = products.findIndex(product => product.id === productId);
        const updatedProducts = [...products]; 
        const oldProduct = updatedProducts[updatedProductIndex];
        const TotalItems = oldProduct.items + items;
        const TotalPrice = (oldProduct.price * oldProduct.items) + (price * items);
        const avgPrice = TotalPrice / TotalItems;
        updatedProducts[updatedProductIndex] = new Product(
          oldProduct.id, 
          oldProduct.name,
          TotalItems, 
          avgPrice, 
          );
        this._products.next(updatedProducts);
      })
    );
  }
  removeStock(
    productId: string,
    name: string,
    items: number,
    price: number,
    ){
      return this.products.pipe(take(1), tap(products => {
        const updatedProductIndex = products.findIndex(product => product.id === productId);
        const updatedProducts = [...products]; 
        const oldProduct = updatedProducts[updatedProductIndex];
        const TotalItems = oldProduct.items - items;
        const TotalPrice = (oldProduct.price * oldProduct.items) - (price * items);
        const avgPrice = TotalPrice / TotalItems;
        updatedProducts[updatedProductIndex] = new Product(
          oldProduct.id, 
          oldProduct.name,
          TotalItems, 
          avgPrice, 
          );
        this._products.next(updatedProducts);
      })
    );
  }
}
