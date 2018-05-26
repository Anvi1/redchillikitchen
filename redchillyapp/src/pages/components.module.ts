import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChillyHomeComponent } from './chilly-home/chilly-home';
import { ChillyMenuList } from './chilly-menu-list/chilly-menu-list';
import { ChillyMenuListProvider } from '../providers/chilly-menu-list';
import { IonicModule } from 'ionic-angular';
import { ChilliCartComponent } from './chilli-cart/chilli-cart';
import { RouteSharingService, ApiMainService, ApiConfigService, ApiHttpService } from '../services/service.pathconfig';
@NgModule({
  declarations: [ChillyHomeComponent, ChillyMenuList, ChilliCartComponent],
  imports: [CommonModule, IonicModule],
  exports: [ChillyHomeComponent, ChillyMenuList, ChilliCartComponent],
  providers: [
    ChillyMenuListProvider,
    RouteSharingService,
    ApiMainService,
    ApiConfigService,
    ApiHttpService
  ]
})
export class PagesModule { }
