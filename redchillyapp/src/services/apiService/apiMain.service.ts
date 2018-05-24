import { Injectable } from '@angular/core';
import { ApiConfigService } from './apiConfig.service';
import { ApiHttpService } from './apiHttp.service';
import { LocalstorageService } from '../utilService/localstorage.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiMainService {   
    constructor(
        private apiConfigService: ApiConfigService,
        private apiHttpService: ApiHttpService,
        private localStorageService: LocalstorageService) { }
   
     authenticateUser(paylaodObj): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            this.apiHttpService
                .REQUEST(this.apiConfigService.apiEndPointObj['autenticateUser'], paylaodObj)
                .then(response => {                 
                    resolve('success login');
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }
}