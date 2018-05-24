import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menuitem';
import { ChillyMenuListProvider } from '../../providers/chilly-menu-list';
import { Observable } from 'rxjs/Observable';

import 'rxjs/operators/map';
import { Router } from '@angular/router';
import { RouteSharingService } from '../../services/service.pathconfig';

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
    this.getMenuList();
  }
  // haha looks ugly now :(
  menulist: Array<MenuItem>;
  menulistCategories: Array<{
    category: string,
    isHidden: boolean
  }>;

  constructor(
    private chillyMenuList: ChillyMenuListProvider,
    private router: Router,
    private sharedData: RouteSharingService
  ) {
  }

  addTo(item) {
    item.numbersAddedToCart++;
  }

  removeFrom(item) {
    item.numbersAddedToCart--;
  }

  getMenuList() {
    this.chillyMenuList
      .getMenuList()
      .subscribe(i => {
        this.menulistCategories = i
          .map(mi => {
            const category = mi.category;
            const isHidden = true;
            return {
              category,
              isHidden
            }
          })
          .filter((fi, index, arr) => arr.findIndex(ffi => ffi.category === fi.category) === index);
        this.menulist = i;
      })
  }

  findItemOfCategory(category: string): Array<MenuItem> {
    return this.menulist.filter(fi => fi.category === category);
  }

  moveToCart() {
    const toRoute = 'chillycart';
    const addedMenuItems = this.menulist.filter(i => i.numbersAddedToCart > 0);
    this.sharedData.addSharedData(toRoute, addedMenuItems);
    this.router.navigate([toRoute]);
  }

}
