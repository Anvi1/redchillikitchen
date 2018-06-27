import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/fromPromise'
import { ApiMainService } from '../services/service.pathconfig';


@Injectable()
export class ChillyVariableProvider {

  private variableList;
  constructor(
    private apiMainService: ApiMainService,
  ) {
    this.variableList = [];
  }

  getValiableList() {
    if (this.variableList && this.variableList.length) {
      return Promise.resolve(this.variableList);
    }
    return this.apiMainService
      .getVariableList()
      .then((varlist) => {
        if (varlist && varlist.length) {
          this.variableList = varlist;
        }
      })
  }
}