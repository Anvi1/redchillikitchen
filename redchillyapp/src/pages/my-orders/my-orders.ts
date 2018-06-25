import { Component } from '@angular/core';

/**
 * Generated class for the MyOrdersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-orders',
  templateUrl: 'my-orders.html'
})
export class MyOrdersComponent {

  text: string;

  constructor() {
    console.log('Hello MyOrdersComponent Component');
    this.text = 'Hello World';
  }

}
