import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {
  @Input() selectedProduct: Product;
  form: FormGroup;
  constructor(public modalCtrl: ModalController,
              private productsService: ProductService,
              private router: Router) { }

  ngOnInit() {
    //Validating user input
    this.form = new FormGroup({
      items: new FormControl('',{
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      price: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      })
    })
    
  }
  //Add new items and prices for a product
  onAddItems(){
    if(!this.form.valid){
      return;
    }
    this.productsService.addStock(
      this.selectedProduct.id,
      this.selectedProduct.name,
      +this.form.value.items,
      +this.form.value.price

    ).subscribe(() =>{
      this.dismiss();
      this.router.navigate(['/stocklevels']);
    })
  }
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
}
