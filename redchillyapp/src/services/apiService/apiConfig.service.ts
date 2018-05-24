export class ApiConfigService {
  private baseUrl: string = "http://localhost:3000";

  apiEndPointObj = {};
  constructor() {
    this.init();
  }
  private init() {
    this.apiEndPointObj['autenticateUser'] = {
      url: `${this.baseUrl}/userTokenization/query`,
      method: 'POST'
    };

    this.apiEndPointObj['getMenuList'] = {
      url: `${this.baseUrl}/api/menu`,
      method: 'GET'
    };
  }
}
