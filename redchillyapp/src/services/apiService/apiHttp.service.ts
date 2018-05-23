
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestMethod, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiHttpService {   
    constructor(private http: Http) { }
    callFinalApi(requestObj: Request): Promise<any> {       
        return this.http.request(requestObj)
            .toPromise()
            .then(response => {
                if (requestObj.responseType === 2) {
                    return response;
                } else {
                    return response.json();
                }
            })
            .catch(this.handleError(this));
    }

    REQUEST(apiConfig: Object, data?: any, extraHeaderObj?: Object, reponseTypeNumber?: number, withCredentialsForThisApi?: boolean): Promise<any> {
        let responseTypeArr = ['Json', 'ArrayBuffer', 'Blob', 'Text'];
        let headerobj = {
            'Content-Type': 'application/json'
        }
        if (extraHeaderObj) {
            for (let prop in extraHeaderObj) {
                if (headerobj[prop]) {
                    headerobj[prop] = headerobj[prop] + ',' + extraHeaderObj[prop];
                } else {
                    headerobj[prop] = extraHeaderObj[prop];
                }

            }
        }
        let requestObj = new Request({
            method: apiConfig['method'],
            body: data ? data : null,
            url: apiConfig['url'],
            headers: new Headers(headerobj),
            responseType: ResponseContentType[responseTypeArr[reponseTypeNumber ? reponseTypeNumber : 0]],
        });
        return this.callFinalApi(requestObj);
    }

    private handleError(self) {
        return (error) => {
            try {                
                return Promise.reject(error.message || error);
            } catch (error) {
                let ErrorMsg = 'Some Error Occured Try Again Later';                
                return Promise.reject(ErrorMsg);
            }

        }
    }

}