import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  private userDetails: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userDetails = this.formBuilder.group({
      fullName: ['', Validators.required],
      fullAdress: ['', Validators.required],
      contactNum: ['', Validators.required],
      emailId: ['', Validators.required],
    });
  }

  logForm() {
    console.log(this.userDetails.value)
  }
}
