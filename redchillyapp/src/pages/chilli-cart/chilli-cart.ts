import { Component, OnInit } from '@angular/core';
import { RouteSharingService } from '../../services/service.pathconfig';
import { MenuItem } from '../../models/menuitem';
import { Router } from '@angular/router';
import { ModalController } from 'ionic-angular';
import { ChillyMenuList } from '../chilly-menu-list/chilly-menu-list';
import { ChilliDetailModelComponent } from '../chilli-detail-model/chilli-detail-model';
import { ChillyUser } from '../../models/user';

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
}
