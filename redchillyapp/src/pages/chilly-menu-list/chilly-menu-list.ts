import { Component } from '@angular/core';
import { MenuItem } from '../../models/menuitem';

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
export class ChillyMenuList {
  // haha looks ugly now :(
  menulist = [new MenuItem(
    'adsf', "dalTadka", 240, 0, 'delicious'
  )];

  constructor() {
  }

}
