import {Component} from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { AllTipsService } from './../../tips.service';

@Component({
  selector: 'add-tips',
  templateUrl: './add-tips.html'
})
export class addTips {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public categories = [];
  public categoryValue = "default";
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

  constructor(private AllTipsService: AllTipsService){
    this.loadTips();

  }
  // Local properties

  loadTips(){
    // Get all comments
    this.AllTipsService.getCategories()
      .subscribe(
        data => {
          console.log(data);
          this.categoryValue = data[0].name;
          this.categories = data
        }, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }


}
