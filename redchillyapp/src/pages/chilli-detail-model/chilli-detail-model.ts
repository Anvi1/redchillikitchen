import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
    private formBuilder: FormBuilder
  ) {
    this.user = new ChillyUser(
      "",
      null,
      "",
      "",
      ""
    )
    this.userDetails = this.formBuilder.group({
      name: ['', Validators.required],
      contact: new FormControl('', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.required
      ])),
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
