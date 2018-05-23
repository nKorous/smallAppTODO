import { Component, OnInit, OnChanges } from '@angular/core';
import { StorageService } from './shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  isLoggedIn = this.checkLogin()

  constructor(private _storageService: StorageService,
          private _router: Router){}

  ngOnInit(){}

  ngOnChanges(){
    this.checkLogin()
  }

  checkLogin(){
      if(sessionStorage.getItem('myInfo')){
        return true
      } else {
        return false
      }
  }

  logSessionOut(){
    this._storageService.logOut()
    this._router.navigate([''])
  }

}
