import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  emails: Array<string>;
 
  constructor(private alertCtrl: AlertController) { 
    //Store customer emails
    this.emails = [];
  }
  //Show an alert when a user enter an email that already exists
  errorAlert(){
    this.alertCtrl.create({
    cssClass: 'my-alert',
    header: 'Email already used', 
    message: 'The emial address provided has already been used to purchase some products. Please provide a new email', 
    buttons: [{
      text: 'OK',
      role: 'cancel',
    }
  ]}).then(alertEl =>{
    alertEl.present()
  });

  }
}
