import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
 private cacheObj=localStorage;
 private defaultDataSetTime= 2*60*60*60*1000;//2 hours
 private checkIfTimeIsValid(dataSetTime:number): Boolean{
   let timeDifference=dataSetTime-(new Date()).getTime();
   if(timeDifference>0){
      return true;
   }
   else{
      return false;
   }
 };
  constructor() { }
  getChacheData(key:string):any {
    let data=this.cacheObj.getItem(key);
    if(!data){
      return null;
    }
    else{
      let cachestorageModel = <CachestorageModel>JSON.parse(data);
      if(this.checkIfTimeIsValid(cachestorageModel.dataSetTime)){
        return cachestorageModel.data;
      }
      else{
        this.resetChacheData(key);
        return null;
      }

    }
  }
  getChacheDataOnce(key:string):any {
    let data=this.cacheObj.getItem(key);
    if(!data){
      return null;
    }
    else{
      let cachestorageModel = <CachestorageModel>JSON.parse(data);
      if(this.checkIfTimeIsValid(cachestorageModel.dataSetTime)){
         let storeddata=cachestorageModel.data;
         this.resetChacheData(key);
         return storeddata;
      }
      else{
        this.resetChacheData(key);
        return null;
      }

    }
  }
  setChacheData(key:string,data:any,time?:number): void{
    let cachestorageModel = new CachestorageModel(); 
    let currentTime:number=(new Date()).getTime();  
    cachestorageModel.data=data;
    cachestorageModel.dataSetTime=time?currentTime+time:currentTime+this.defaultDataSetTime;
    this.cacheObj.setItem(key,JSON.stringify(cachestorageModel));
  }
  resetChacheData(key): void{
    this.cacheObj.removeItem(key);
  }
  resetAllChacheData(): void{
    this.cacheObj.clear();
  }

}

class CachestorageModel{
  data:any;
  dataSetTime:number;
}