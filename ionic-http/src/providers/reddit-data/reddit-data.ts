import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedditDataProvider {
  public users: any;
  jsonData = {};
  constructor(public http: HttpClient) {
    console.log('Hello RedditDataProvider Provider');
  }

  getRemoteData(){
    //console.log(this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot'));
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot').map((res: Response) => res)
    .subscribe(data => {
      //this.jsonData = data; //copiando para a variavel do template
      console.log(data);
  });
  }

  getUsers(){
    if (this.users) {
      // already loaded data
      return Promise.resolve(this.users);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('assets/data/redditData.json')
        .map(res => res)
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.users = data.users;
          resolve(this.users);
        });
    });
    }


  getLocalData(){
    this.http.get('assets/data/redditData.json').map((res: Response) => res) //res ja retorna em json
    .subscribe(data => {
      this.jsonData = data; //copiando para a variavel do template
      //console.log(data);
      console.log(this.jsonData);
  });}

}
