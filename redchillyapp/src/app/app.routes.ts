import { ChillyHomeComponent } from "../pages/chilly-home/chilly-home";
import { ChillyMenuList } from "../pages/chilly-menu-list/chilly-menu-list";
import { ChilliCartComponent } from "../pages/chilli-cart/chilli-cart";

export const appRoutes = [
  { path: 'chillyhome', component: ChillyHomeComponent },
  { path: 'chillymenu', component: ChillyMenuList },
  { path: 'chillycart', component: ChilliCartComponent }
]