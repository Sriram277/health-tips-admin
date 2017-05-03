import { Component } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'users',
  templateUrl: './users.html'
})
export class Users {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor() {
  }

  ngOnInit() {
  }
}
