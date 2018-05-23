import { Component, OnInit } from '@angular/core';
import { Info } from '../shared/classes/info';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-get-info',
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class GetInfoComponent implements OnInit {


  name: string = ''
  email: string

  constructor(private _router: Router,
              private _snackbar: MatSnackBar,
              private _storageService: StorageService) { }

  ngOnInit() {
  }

  storeInfo(){
      this._storageService.storeInfo(this.name)
      this._router.navigate(['/welcome'])
      this._snackbar.open('Welcome: ' + this.name, '', {duration: 5000})
    }

}
