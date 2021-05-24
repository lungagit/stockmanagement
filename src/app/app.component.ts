import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { 
      title: 'Add Stock', 
      url: '/addstock', 
      icon: 'add' 
    },
    { 
      title: 'Remove Stock', 
      url: '/removestock', 
      icon: 'trash' 
    },
    { 
      title: 'Stock Levels', 
      url: '/stocklevels', 
      icon: 'analytics' 
    },
    
  ];
  constructor() {}
}
