import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../list/list';
import { AssignmentPage } from '../assignment/assignment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listPage = ListPage;
  assignmentPage = AssignmentPage;

  constructor(public navCtrl: NavController) {

  }

  onClick(){
    console.log('clicked!');
  }

  

}
