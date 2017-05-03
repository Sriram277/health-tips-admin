import {Component} from '@angular/core';

import { AllTipsService } from './../../tips.service';
import { LocalDataSource } from 'ng2-smart-table';
import 'style-loader!./all-tips.scss';

@Component({
  selector: 'all-tips',
  templateUrl: './all-tips.html'
})
export class allTips {
  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'id',
        type: 'string'
      },
      title: {
        title: 'title',
        type: 'string'
      },
      image:{
        title: 'image',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private AllTipsService: AllTipsService
  ){}
  // Local properties

  loadTips(){
    // Get all comments
    this.AllTipsService.getTips()
      .subscribe(
        tips => this.source.load(tips), //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(){
    // Load comments
    this.loadTips()
  }

}
