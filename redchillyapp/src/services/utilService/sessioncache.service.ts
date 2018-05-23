import { Injectable } from '@angular/core';

@Injectable()
export class SessionCacheService {

  constructor() { }

  private cacheObj={};
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
 
   getChacheData(key:string):any {
     let data=this.cacheObj[key];
     if(!data){
       return null;
     }
     else{
       let cachestorageModel = <CachestorageModel>JSON.parse(data);
       if(this.checkIfTimeIsValid(cachestorageModel.dataSetTime)){
         return cachestorageModel.data;
       }
       else{
         return null;
       }
 
     }
   }
   setChacheData(key:string,data:any,time?:number): void{
     let cachestorageModel = new CachestorageModel(); 
     let currentTime:number=(new Date()).getTime();  
     cachestorageModel.data=data;
     cachestorageModel.dataSetTime=time?currentTime+time:currentTime+this.defaultDataSetTime;
     this.cacheObj[key]=JSON.stringify(cachestorageModel);
   }
   resetChacheData(key): void{
     delete this.cacheObj[key];
   }
   resetAllChacheData(): void{
     this.cacheObj= {};
   }
}

class CachestorageModel{
  data:any;
  dataSetTime:number;
}