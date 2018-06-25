import { Component } from '@angular/core';
import { MenuItem } from '../../models/menuitem';

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

  cartItems: Array<MenuItem>;
  subTotal: number;
  taxes;
  gtotal;
  constructor() {
    this.cartItems = [];
  }

}
