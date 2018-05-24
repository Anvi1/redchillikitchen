import { Injectable } from '@angular/core';

@Injectable()
export class RouteSharingService {

  private sharedData;

  constructor() {

  }

  addSharedData(forRoute, data) {
    this.sharedData = {
      forRoute,
      data
    }
  }

  getSharedData(forRoute) {
    if (this.sharedData
      && this.sharedData.forRoute
      && this.sharedData.data
      && this.sharedData.forRoute === forRoute) {
      const decoupledData = JSON.parse(JSON.stringify(this.sharedData.data));
      return decoupledData;
    }
    return null;
  }
}