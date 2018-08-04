import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users = [];
  constructor(public navCtrl: NavController, public redditService: RedditDataProvider) {
    //this.getUsers();
  }

  ionViewDidLoad(){
    this.redditService.getRemoteData();
    this.redditService.getLocalData();
    this.loadUsers();

    console.log(this.users);
  }

  loadUsers(){
    this.redditService.getUsers().then(data => {
      this.users = data;
      console.log(this.users);
    });
  }
}
