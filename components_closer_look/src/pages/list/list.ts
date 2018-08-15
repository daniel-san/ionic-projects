import { Component } from '@angular/core';
import { reorderArray } from 'ionic-angular';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    items = ['Apples', 'Bananas', 'Berries'];

    reorderItems(indexes){
        this.items = reorderArray(this.items, indexes);
    }
}
