import { ChillyHomeComponent } from "../pages/chilly-home/chilly-home";
import { ChillyMenuList } from "../pages/chilly-menu-list/chilly-menu-list";
import { ChilliCartComponent } from "../pages/chilli-cart/chilli-cart";
import { MyOrdersComponent } from "../pages/my-orders/my-orders";

export const appRoutes = [
  { path: 'chillyhome', component: ChillyHomeComponent },
  { path: 'chillymenu', component: ChillyMenuList },
  { path: 'chillycart', component: ChilliCartComponent },
  { path: 'myorders', component: MyOrdersComponent }
]