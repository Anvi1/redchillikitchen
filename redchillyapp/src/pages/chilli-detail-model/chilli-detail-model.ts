import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ChillyUser } from '../../models/user';

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

  userDetails: FormGroup;
  user: ChillyUser;

  constructor(
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
  ) {
    this.user = new ChillyUser(
      "",
      null,
      "",
      "",
      ""
    )
    const user = this.navParams.get('user');
    if (user) {
      this.user = user;
    }
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      contact: new FormControl('', [
        Validators.min(999999999),
        Validators.required
      ]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      addr1: ['', Validators.required],
      addr2: ['', Validators.required],
    });
  }

  dismiss(user?) {
    this.viewCtrl.dismiss(user);
  }

  submit() {
    this.dismiss(this.user);
  }

}
