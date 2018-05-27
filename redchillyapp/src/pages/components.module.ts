import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChillyHomeComponent } from './chilly-home/chilly-home';
import { ChillyMenuList } from './chilly-menu-list/chilly-menu-list';
import { ChillyMenuListProvider } from '../providers/chilly-menu-list';
import { IonicModule } from 'ionic-angular';
import { ChilliCartComponent } from './chilli-cart/chilli-cart';
import { RouteSharingService, ApiMainService, ApiConfigService, ApiHttpService } from '../services/service.pathconfig';
import { ChilliDetailModelComponent } from './chilli-detail-model/chilli-detail-model';
import { ChillyOrderProvider } from '../providers/chilly-order';

@NgModule({
  entryComponents: [ChilliDetailModelComponent],
  declarations: [
    ChillyHomeComponent,
    ChillyMenuList,
    ChilliCartComponent,
    ChilliDetailModelComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [ChillyHomeComponent, ChillyMenuList, ChilliCartComponent],
  providers: [
    ChillyMenuListProvider,
    RouteSharingService,
    ApiMainService,
    ApiConfigService,
    ApiHttpService,
    ChillyOrderProvider
  ]
})
export class PagesModule { }
