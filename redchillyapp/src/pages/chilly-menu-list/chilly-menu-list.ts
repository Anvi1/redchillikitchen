import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../../models/menuitem';
import { ChillyMenuListProvider } from '../../providers/chilly-menu-list';

import 'rxjs/operators/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Router } from '@angular/router';
import { RouteSharingService } from '../../services/service.pathconfig';
import { Observable } from 'rxjs/Observable';
import { ToastController, Slides, LoadingController } from 'ionic-angular';
import { ChillyImageProvider } from '../../providers/chilli-image.provider';
import { ChillyVariableProvider } from '../../providers/chilli-variables';

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
    this.getVariableList();
    const sharedData = this.sharedData.getSharedData('chillymenu')
    this.getMenuList(sharedData);
    this.carousels = this.images.getCarouselImages();
    this.slides.startAutoplay();
  }

  @ViewChild(Slides) slides: Slides;
  menulist: Array<MenuItem>;
  menulistCategories: Array<{
    category: string,
    isHidden: boolean,
    addedItems: number,
  }>;
  hasAddedSomeFood: boolean;
  carousels: Observable<string[]>;

  constructor(
    private chillyMenuList: ChillyMenuListProvider,
    private router: Router,
    private sharedData: RouteSharingService,
    public toastCtrl: ToastController,
    private images: ChillyImageProvider,
    public loadingCtrl: LoadingController,
    private variableList: ChillyVariableProvider,
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

  getVariableList() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait..'
    });
    loading.present();

    const toast = this.toastCtrl.create({
      message: 'Our servers are not reachable! Please retry',
      showCloseButton: true,
      closeButtonText: "Retry",
      position: 'bottom'
    });

    this.variableList.getValiableList()
      .catch((err: any) => {
        toast.present();
      })
      .then(() => {
        loading.dismiss();
      })
  }
  getMenuList(hasSharedData: Array<MenuItem>) {
    const toast = this.toastCtrl.create({
      message: 'Our servers are not reachable! Please retry',
      showCloseButton: true,
      closeButtonText: "Retry",
      position: 'bottom'
    });
    toast.onDidDismiss(() => {
      this.getMenuList(hasSharedData);
    });

    const loading = this.loadingCtrl.create({
      content: 'Please wait..'
    });
    loading.present();

    this.chillyMenuList
      .getMenuList()
      .catch((err: any, caught: Observable<MenuItem[]>) => {
        toast.present();
        loading.dismiss();
        return Observable.of(null);
      })
      .filter(fi => !!fi)
      .subscribe(menulist => {
        loading.dismiss();
        if (menulist && menulist.length) {
          this.chillyMenuList.saveMenuForSession(menulist);
        }
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

    const addedMenuItems = this.menulist.filter(i => i.numbersAddedToCart > 0);
    const myordersRoute = 'chillymenu';
    this.sharedData.addSharedData(myordersRoute, addedMenuItems);
  }

}
