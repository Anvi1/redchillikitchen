import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ChilliDetailModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chilli-detail-model',
  templateUrl: 'chilli-detail-model.html'
})
export class ChilliDetailModelComponent {


  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
