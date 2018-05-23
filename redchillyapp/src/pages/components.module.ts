import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChillyHomeComponent } from './chilly-home/chilly-home';
import { ChillyMenuList } from './chilly-menu-list/chilly-menu-list';
import { ChillyMenuListProvider } from '../providers/chilly-menu-list';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [ChillyHomeComponent, ChillyMenuList],
  imports: [CommonModule, IonicModule],
  exports: [ChillyHomeComponent, ChillyMenuList],
  providers: [
    ChillyMenuListProvider
  ]
})
export class PagesModule { }
