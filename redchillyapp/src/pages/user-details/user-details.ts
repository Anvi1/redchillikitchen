import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  public userDetails: FormGroup;
  constructor(private formBuilder: FormBuilder) {

    this.userDetails = new FormGroup({
      AdressLine1: new FormControl('AdressLine1'),
      AdressLin21: new FormControl('AdressLine2'),
      AdressLine3: new FormControl('AdressLine3'),

    });


    this.userDetails = this.formBuilder.group({
      fullName: ['', Validators.required],
      AdressLine1: ['', Validators.required],
      AdressLine2: ['', Validators.required],
      AdressLine3: ['', Validators.required],
      contactNum: new FormControl('', Validators.compose([
        Validators.maxLength(10), Validators.minLength(10), Validators.required
      ])),
      emailId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

  logForm() {
    console.log(this.userDetails.value)
  }
}
