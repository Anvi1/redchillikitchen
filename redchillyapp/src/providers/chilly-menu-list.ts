import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuitem';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise'
import { ApiMainService } from '../services/service.pathconfig';

/*
  Generated class for the ChillyMenuListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChillyMenuListProvider {

  constructor(private apiMainService: ApiMainService) {

  }

  getMenuList(): Observable<Array<MenuItem>> {
    const menulist = this.apiMainService
      .getMenuList()
      .then((resArr) => {
        if (!resArr
          || !resArr.length) {
          return [];
        }

        return resArr.map(mi => {
          return {
            id: mi._id,
            ...mi
          }
        })
      });

    return Observable.fromPromise(menulist);
  }
}
