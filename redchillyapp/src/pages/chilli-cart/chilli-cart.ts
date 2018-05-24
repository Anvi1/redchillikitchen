import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteSharingService } from '../../services/service.pathconfig';

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
export class ChilliCartComponent implements OnInit {


  cartItems: string;

  constructor(
    private sharedData: RouteSharingService,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.sharedData.getSharedData('chillycart');
  }
}
