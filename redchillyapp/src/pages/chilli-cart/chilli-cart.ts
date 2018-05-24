import { Component } from '@angular/core';

/**
 * Generated class for the ChilliCartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chilli-cart',
  templateUrl: 'chilli-cart.html'
})
export class ChilliCartComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
