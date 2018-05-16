import { NgModule } from '@angular/core';
import { ChillyHomeComponent } from './chilly-home/chilly-home';
import { UserDetailsPage } from "../pages/user-details/user-details";
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ChillyHomeComponent,UserDetailsPage],
	imports: [IonicModule],
	exports: [ChillyHomeComponent,UserDetailsPage]
})
export class PagesModule {}
