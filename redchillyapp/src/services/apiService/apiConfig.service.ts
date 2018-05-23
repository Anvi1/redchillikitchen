import { OnInit } from '@angular/core';

export class ApiConfigService {
  private baseUrl: string ="";


  apiEndPointObj = {};
  constructor() {
    this.init();
  }
  private init() {
    this.apiEndPointObj['autenticateUser'] = {
      url: this.baseUrl + '/userTokenization/query',
      method: 'POST'
    };
  }
}
