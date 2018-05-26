import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuitem';
import { ChillyMenuListProvider } from '../../providers/chilly-menu-list';

import 'rxjs/operators/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Router } from '@angular/router';
import { RouteSharingService } from '../../services/service.pathconfig';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ChillyMenuList component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chilly-menu-list',
  templateUrl: 'chilly-menu-list.html'
})
export class ChillyMenuList implements OnInit {

  ngOnInit(): void {
    const sharedData = this.sharedData.getSharedData('chillymenu')
    this.getMenuList(sharedData);
  }

  menulist: Array<MenuItem>;
  menulistCategories: Array<{
    category: string,
    isHidden: boolean,
    addedItems: number,
  }>;
  hasAddedSomeFood: boolean;

  constructor(
    private chillyMenuList: ChillyMenuListProvider,
    private router: Router,
    private sharedData: RouteSharingService,
    public toastCtrl: ToastController
  ) {
  }

  addTo(item) {
    item.numbersAddedToCart++;
    this.willShowCartButton();
  }

  removeFrom(item) {
    item.numbersAddedToCart--;
    this.willShowCartButton();
  }

  getMenuList(hasSharedData: Array<MenuItem>) {
    let toast = this.toastCtrl.create({
      message: 'Our servers are not reachable! Please retry',
      showCloseButton: true,
      closeButtonText: "Retry",
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      this.getMenuList(hasSharedData);
    });

    this.chillyMenuList
      .getMenuList()
      .catch((err: any, caught: Observable<MenuItem[]>) => {

        toast.present();
        return Observable.of(null);
      })
      .filter(fi => !!fi)
      .subscribe(menulist => {
        this.initMenu(hasSharedData, menulist);
      })

  }
  initMenu(hasSharedData, i: Array<MenuItem>): void {
    this.menulistCategories = i
      .map(mi => {
        const category = mi.category;
        const isHidden = true;
        const addedItems = 0;
        return {
          category,
          isHidden,
          addedItems
        }
      })
      .filter((fi, index, arr) => arr.findIndex(ffi => ffi.category === fi.category) === index);

    this.menulist = i.map(li => {
      li.numbersAddedToCart = 0
      if (hasSharedData
        && hasSharedData.length) {
        const found = hasSharedData.find(fi => fi.id == li.id);
        if (found) {
          li.numbersAddedToCart = found.numbersAddedToCart;
        }
      }
      return li;
    });
    this.willShowCartButton();
  }

  findItemOfCategory(category: string): Array<MenuItem> {
    return this.menulist.filter(fi => fi.category === category);
  }

  findAddedNumbersToCart(category) {
    const categoryList = this.findItemOfCategory(category);
    return categoryList
      .map(fi => fi.numbersAddedToCart)
      .reduce((now, next) => now + next, 0);
  }

  moveToCart() {
    const toRoute = 'chillycart';
    const addedMenuItems = this.menulist.filter(i => i.numbersAddedToCart > 0);
    this.sharedData.addSharedData(toRoute, addedMenuItems);
    this.router.navigate([toRoute]);
  }

  willShowCartButton() {
    const hasAddedSomeFood = this.menulist.filter(i => i.numbersAddedToCart > 0).length;
    this.hasAddedSomeFood = hasAddedSomeFood > 0;
    this.menulistCategories
      .forEach(mi => {
        mi.addedItems = this.findAddedNumbersToCart(mi.category);
      })
  }

}
