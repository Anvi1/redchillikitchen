import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuitem';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

/*
  Generated class for the ChillyMenuListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChillyMenuListProvider {

  constructor() {

  }

  getMenuList(): Observable<Array<MenuItem>> {
    return Observable.of([
      new MenuItem('adsf', "dummy dish1", 240, 0, 'delicious', "Starters", true),
      new MenuItem('adsf', "dummy dish2", 240, 0, 'dummy description', "Main Course", true)
    ]);
  }
}
