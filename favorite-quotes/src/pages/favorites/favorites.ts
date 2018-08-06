import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { QuotePage } from '../quote/quote';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];
  constructor(private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService){

  }

  ionViewWillEnter(){
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesService.removeQuoteFromFavorites(quote);
    const position = this.quotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position,1);
  }

  //use this when binding the color property: [color]="getBackground()"
  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground': 'quoteBackground';
  }

  isAltBackground(){
    return this.settingsService.isAltBackground();
  }
}
