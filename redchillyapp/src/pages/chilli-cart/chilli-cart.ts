import { Component, OnInit } from '@angular/core';
import { RouteSharingService } from '../../services/service.pathconfig';
import { MenuItem } from '../../models/menuitem';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { ChilliDetailModelComponent } from '../chilli-detail-model/chilli-detail-model';
import { ChillyUser } from '../../models/user';
import { UserOrder } from '../../models/userorder';

/**
 * Generated class for the ChilliCartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chilli-cart',
  templateUrl: 'chilli-cart.html'
})
export class ChilliCartComponent implements OnInit {

  user: ChillyUser;
  cartItems: Array<MenuItem>;
  subTotal: number;
  constructor(
    private sharedData: RouteSharingService,
    private router: Router,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.sharedData.getSharedData('chillycart');
    if (this.cartItems
      && this.cartItems.length) {
      this.subTotal = this.cartItems
        .map(i => i.price)
        .reduce((now, next) => now + next, 0);
    }
  }

  goBackToMenu() {
    const toRoute = 'chillymenu';
    const cartItems = this.cartItems;
    this.sharedData.addSharedData(toRoute, cartItems);
    this.router.navigate([toRoute]);
  }

  addDetails() {
    let userDetailModel = this.modalCtrl.create(ChilliDetailModelComponent);
    userDetailModel.present();

    userDetailModel.onDidDismiss((user) => {
      this.user = user;
    })
  }

  placeOrder() {
    const address = `${this.user.addr1} ${this.user.addr2}`;
    const cartItems: Array<{
      name: string,
      price: number,
      quantity: number,
    }> = this.cartItems
      .map(i => {
        const name = i.name;
        const price = i.price;
        const quantity = i.numbersAddedToCart;
        return {
          name,
          price,
          quantity
        }
      })
    const userOrder = new UserOrder(
      this.user.name,
      this.user.contact,
      address,
      45,
      45,
      cartItems
    )

    console.log(userOrder);
  }
}
