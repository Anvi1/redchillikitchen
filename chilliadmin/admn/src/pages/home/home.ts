import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
declare var XLSX;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  orderList: any;
  lastfetchTime: any;
  ngOnInit(): void {
    this.setupInitVal();
    this.getOrders();
  }
  iscooking: boolean;
  menu;
  cgst;
  sgst;
  varRoute = "http://localhost:3000/api"
  constructor(public navCtrl: NavController,
    private http: Http) {
    this.menu = [];
    this.orderList = [];
  }

  setupInitVal() {

    this.getVar('CGST').then(val => this.cgst = val);
    this.getVar('SGST').then(val => this.sgst = val);
    this.getVar('ISCOOKING').then(val => this.iscooking = val);
  }
  changeStatus(val) {
    this.http.put(`${this.varRoute}/projectvariable`, {
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

  getVar(name) {
    return this.http.get(`${this.varRoute}/projectvariable/getvariable/${name}`)

      .toPromise()
      .then(uy => {
        if (uy && uy.ok) {
          const res = (uy.json());
          if (res) {
            return res.variableValue;
          }
        }
      })
  }

  setVar(name, val) {
    this.http.put(`${this.varRoute}/projectvariable`, {
      "varialble_name": name,
      "variable_value": val
    }).subscribe(uy => {
      if (uy && uy.ok) {
        alert("Done!");
      }
    })
  }


  setMenu() {
    this.http.post(`${this.varRoute}/menu/`, this.menu)
      .subscribe(uy => {
        if (uy && uy.ok) {
          alert("New menu is set!");
          window.location.reload();
        }
      })
  }

  deleteMenu() {
    this.http.delete(`${this.varRoute}/menu/`)
      .subscribe(uy => {
        if (uy && uy.ok) {
          alert("Old menu deleted!");
        }
      })
  }
  fileLoad(file) {
    var reader = new FileReader();

    reader.onload = (e) => {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach((sheetName) => {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        this.menu = JSON.parse(json_object).map((i) => {
          i.price = parseFloat(i.price);
          i.isVeg = i.isVeg === "yes";
          return i;
        });

      })

    };

    reader.onerror = (ex) => {
      console.log(ex);
    };

    reader.readAsBinaryString(file);
  }

  getOrders() {
    let todaysDate = new Date();
    todaysDate.setMinutes(0);
    todaysDate.setSeconds(0);
    todaysDate.setHours(0);

    todaysDate.setDate(todaysDate.getDate() - 1);
    let timestamp = 0;
    if (!this.lastfetchTime) {
      timestamp = todaysDate.getTime();
    } else {
      timestamp = this.lastfetchTime;
    }
    this.lastfetchTime = timestamp;
    this.http.get(`${this.varRoute}/order/latestOrders/${timestamp}`)
      .subscribe(uy => {
        if (uy && uy.ok) {
          const orderList = uy.json();
          this.orderList.concat(orderList);
        }
      })
  }
}

