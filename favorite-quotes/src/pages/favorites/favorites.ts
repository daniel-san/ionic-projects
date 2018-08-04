import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController){

  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }
}
