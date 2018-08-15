import { Component } from '@angular/core';


@Component({
  selector: 'app-touch-event',
  template: `
    <div class="gestures"
      (click)="onElementClicked()">
      Click me
    </div>

    <div class="gestures"
      (tap)="onElementTapped()">
      Tap me
    </div>

    <div class="gestures"
      (press)="onElementPressed()"
      (tap)="onElementTapped()">
      Long Press me
    </div>
  `
})
export class TouchEventComponent {

  onElementClicked(){
    console.log('I was clicked or touched');
  }

  onElementTapped() {
    console.log('I was tapped');
  }

  onElementPressed(){
    console.log('I was pressed');
  }

}
