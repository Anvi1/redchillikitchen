import { NgModule } from '@angular/core';
import { ChillyHomeComponent } from './chilly-home/chilly-home';
import { ChillyMenuList } from './chilly-menu-list/chilly-menu-list';
@NgModule({
  declarations: [ChillyHomeComponent, ChillyMenuList],
  imports: [],
  exports: [ChillyHomeComponent, ChillyMenuList]
})
export class PagesModule { }
