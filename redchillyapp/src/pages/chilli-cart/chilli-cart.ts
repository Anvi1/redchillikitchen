import { Component, OnInit } from '@angular/core';
import { RouteSharingService, LocalstorageService } from '../../services/service.pathconfig';
import { MenuItem } from '../../models/menuitem';
import { Router } from '@angular/router';
import { ModalController, ToastController } from 'ionic-angular';
import { ChilliDetailModelComponent } from '../chilli-detail-model/chilli-detail-model';
import { ChillyUser } from '../../models/user';
import { UserOrder } from '../../models/userorder';
import { ChillyOrderProvider } from '../../providers/chilly-order';

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

  gtotal: number;
  taxes: number;
  taxesRateCgst: number;
  taxesRateSgst: number;
  user: ChillyUser;
  cartItems: Array<MenuItem>;
  subTotal: number;
  constructor(
    private sharedData: RouteSharingService,
    private router: Router,
    public modalCtrl: ModalController,
    private orderProvider: ChillyOrderProvider,
    public toastCtrl: ToastController,
    private localStorageService: LocalstorageService
  ) { }

  ngOnInit(): void {
    const user = this.localStorageService.getChacheData('USER_DETAILS');
    if (user) {
      this.user = user;
    }
    this.cartItems = this.sharedData.getSharedData('chillycart');
    if (this.cartItems
      && this.cartItems.length) {
      this.subTotal = this.cartItems
        .map(mi => mi.numbersAddedToCart * mi.price)
        .reduce((fi, si) => fi + si, 0);
    }
    this.taxesRateCgst = 5;
    this.taxesRateSgst = 5;
    this.taxes = this.subTotal * ((this.taxesRateCgst + this.taxesRateSgst) / 100);
    this.gtotal = this.subTotal + this.taxes;
  }

  goBackToMenu(withoutItems?) {
    const toRoute = 'chillymenu';
    const cartItems = this.cartItems;
    if (!withoutItems) {
      this.sharedData.addSharedData(toRoute, cartItems);
    }
    this.router.navigate([toRoute]);
  }

  addDetails(user?) {
    let userDetailModel = this.modalCtrl.create(ChilliDetailModelComponent, { user });
    userDetailModel.present();

    userDetailModel.onDidDismiss((user) => {
      if (user) {
        this.user = user;
        this.localStorageService.setChacheData('USER_DETAILS', this.user);
      }
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
      });

    const userOrder = new UserOrder(
      this.user.name,
      this.user.contact,
      address,
      45,
      45,
      cartItems
    )
    let toast;
    this.orderProvider
      .placeOrder(userOrder)
      .then(() => {
        toast = this.toastCtrl.create({
          message: 'Your Order is Placed !',
          showCloseButton: false,
          duration: 3000,
          position: 'bottom'
        });
        this.goBackToMenu(true);
      })
      .catch((err) => {
        let msg = 'Our servers are not reachable! Please retry';
        if (err && err.shouldShow) {
          msg = err.error;
        }
        toast = this.toastCtrl.create({
          message: msg,
          showCloseButton: false,
          duration: 3000,
          position: 'bottom'
        });
      })
      .then(() => {
        toast.present();
      })
  }
}
