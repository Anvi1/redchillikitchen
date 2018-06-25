import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuitem';
import { LocalstorageService } from '../../services/service.pathconfig';
import { UserOrder } from '../../models/userorder';

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
export class MyOrdersComponent implements OnInit {

  cartItems;
  subTotal: number;
  taxes;
  gtotal;
  constructor(
    private localStr: LocalstorageService
  ) {
    this.cartItems = [];
  }

  ngOnInit() {
    const latestOrder: {
      userOrder: UserOrder,
      taxes: number,
      subTotal: number
    } = this.localStr.getChacheData('LATEST_ORDER');

    if (latestOrder) {
      this.cartItems = latestOrder.userOrder.foodItemList;
      this.gtotal = latestOrder.userOrder.billingAmount;
      this.taxes = latestOrder.taxes;
      this.subTotal = latestOrder.subTotal;
    }
  }

}
