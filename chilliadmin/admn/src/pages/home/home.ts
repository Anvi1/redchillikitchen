import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  iscooking: boolean;
  menu;
  varRoute = "http://localhost:3000/api/projectvariable"
  constructor(public navCtrl: NavController,
    private http: Http) {
    this.menu = [];
  }

  changeStatus(val) {
    this.http.put(this.varRoute, {
      "varialble_name": "ISCOOKING",
      "variable_value": val
    }).subscribe(uy => {
      if (uy && uy.ok) {
        this.iscooking = val;
      }
    })
  }

  addItem() {
    this.menu.push(
      JSON.parse(JSON.stringify(
        {
          "name": "",
          "isVeg": true,
          "price": 0,
          "category": "",
          "numbersAddedToCart": 0,
          "description": ""
        }
      ))
    )
  }
}
