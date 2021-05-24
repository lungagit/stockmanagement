import { Component, Input, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CustomerService } from 'src/app/customer/customer.service';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-remove-items',
  templateUrl: './remove-items.page.html',
  styleUrls: ['./remove-items.page.scss'],
})
export class RemoveItemsPage implements OnInit {
@Input() selectedProduct: Product;

  form: FormGroup;
  constructor(public modalCtrl: ModalController,
              private productsService: ProductService,
              private customersService: CustomerService,
              private router: Router) { 
                 
              }

  ngOnInit() {
    //Form validation
    this.form = new FormGroup({
      email: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
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
  onRemoveItems(){
    //Only remove items when the form is valid and the email has not been used before
    if(!this.form.valid || this.customersService.emails.includes(this.form.value.email)){
      this.customersService.errorAlert();
      return;
    }
    this.productsService.removeStock(
      this.selectedProduct.id,
      this.selectedProduct.name,
      +this.form.value.items,
      +this.form.value.price

    ).subscribe(() =>{
      this.addNewCustomer();
      this.dismiss();
      this.router.navigate(['/stocklevels']);
    })
  }
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    })
  }
  //Add a new customer email in the array
  addNewCustomer(){
    this.customersService.emails.push(this.form.value.email);
  }

}
