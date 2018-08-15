import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-assignment',
  templateUrl: 'assignment.html',
})
export class AssignmentPage {

  message: string = "Tap twice, press four times";
  correctCode: boolean = false;

  tapsNumber = 0;
  pressesNumber = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  isCorrect(){
    var correct = (this.tapsNumber == 2) && (this.pressesNumber == 4);
    return correct;
  }

  addTap(){
    this.tapsNumber++;
    this.correctCode = this.isCorrect();
  }

  addPress(){
    this.pressesNumber++;
    this.correctCode= this.isCorrect();
  }

  resetTaps(){
    this.tapsNumber = 0;
    this.correctCode = false;
  }

  resetPresses(){
    this.pressesNumber = 0;
    this.correctCode = false;
  }

  resetCounters(){
    this.tapsNumber = 0;
    this.pressesNumber = 0;
    this.correctCode = false;
  }

  onDidReset(resetType: string){
    switch (resetType) {
      case 'tap':
        this.resetTaps();
        break;

      case 'press':
        this.resetPresses();
        break;

      default:
        this.resetCounters();
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentPage');
  }

}
