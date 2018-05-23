import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  storeInfo(data){
    sessionStorage.setItem('myInfo', data)
    return true
  }

  getMyInfo(){
    return sessionStorage.getItem('myInfo')
  }

  logOut(){
    sessionStorage.clear()
  }
}
