import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuitem';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

/*
  Generated class for the ChillyMenuListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChillyMenuListProvider {

  constructor() {

  }

  getMenuList(): Observable<Array<MenuItem>> {
    return Observable.of([
      {
        "id": "5b0392b0907da91a35db503e",
        "name": "Cedarville",
        "isVeg": true,
        "price": 30,
        "category": "Main Course",
        "numbersAddedToCart": 10,
        "description": "Ullamco ea eiusmod est mollit incididunt ex ullamco ipsum eu aliqua pariatur. Sunt ut proident excepteur adipisicing proident aliquip fugiat culpa tempor velit. Est ipsum amet voluptate consectetur. Anim nisi ex ut ipsum. Minim ea ipsum duis consectetur nostrud aliquip incididunt ex eu dolore velit eu ad adipisicing. Officia sunt ad proident minim. Anim ut eiusmod commodo nulla sint dolor culpa."
      },
      {
        "id": "5b0392b0582600002458e7b3",
        "name": "Belmont",
        "isVeg": false,
        "price": 27,
        "category": "Main Course",
        "numbersAddedToCart": 9,
        "description": "Ipsum fugiat nulla et culpa laborum. Proident excepteur labore ex ipsum quis anim incididunt sunt mollit dolore mollit anim tempor consectetur. Nisi elit pariatur occaecat pariatur elit anim dolore tempor elit officia."
      },
      {
        "id": "5b0392b0a19448d611c4285e",
        "name": "Mammoth",
        "isVeg": true,
        "price": 30,
        "category": "Main Course",
        "numbersAddedToCart": 10,
        "description": "Anim commodo ex quis et. Elit dolor ullamco incididunt consequat et Lorem. Non id nisi officia sit aliquip cillum. Deserunt esse tempor mollit cillum reprehenderit ea ad reprehenderit esse mollit officia fugiat laboris aliqua. Ipsum pariatur dolor veniam proident consectetur ex commodo ullamco."
      },
      {
        "id": "5b0392b007d7ff95e1f5eeb6",
        "name": "Eden",
        "isVeg": true,
        "price": 36,
        "category": "Desert",
        "numbersAddedToCart": 21,
        "description": "Duis velit adipisicing magna exercitation ipsum. Labore laborum laboris enim labore. Ad nostrud pariatur consequat quis minim nisi exercitation voluptate nostrud pariatur occaecat. Nisi esse dolore consectetur magna incididunt nisi excepteur cupidatat. Proident ullamco eu ut ea in ex id aliquip magna."
      },
      {
        "id": "5b0392b0ae700a8e94c7a610",
        "name": "Jessie",
        "isVeg": true,
        "price": 5,
        "category": "Main Course",
        "numbersAddedToCart": 16,
        "description": "Amet aliquip anim aliquip exercitation. Velit amet ea irure amet dolore ut et. Excepteur sit commodo consectetur dolor do laborum elit proident ipsum ex ullamco nostrud. Ex aliqua labore quis id ea occaecat minim dolore sit nostrud sunt."
      },
      {
        "id": "5b0392b050e91c4502f675e8",
        "name": "Cliff",
        "isVeg": false,
        "price": 32,
        "category": "Main Course",
        "numbersAddedToCart": 31,
        "description": "Officia sit eiusmod cillum velit quis. Consectetur incididunt aliquip incididunt sit voluptate excepteur cupidatat ullamco aliquip. Aliquip est ut excepteur cillum tempor ipsum adipisicing Lorem incididunt quis velit mollit culpa enim. Officia magna est aute ut culpa aute. Commodo id amet ex mollit sint ipsum sint sunt irure aliquip reprehenderit tempor. Ullamco tempor non est duis ea occaecat ipsum aliquip ut dolore sit aute exercitation pariatur. Est mollit est tempor sit qui consectetur sunt nostrud excepteur."
      },
      {
        "id": "5b0392b0c7aeb69e69c151ba",
        "name": "Baker",
        "isVeg": true,
        "price": 31,
        "category": "Desert",
        "numbersAddedToCart": 36,
        "description": "Ad et culpa eu sint excepteur duis commodo tempor nulla anim labore esse. Incididunt incididunt est aute ipsum commodo id ea est sunt incididunt. Ullamco quis et consectetur ut adipisicing nisi occaecat exercitation adipisicing sunt magna pariatur ex. Aliquip reprehenderit commodo minim in aliqua dolore culpa incididunt non labore in in. Officia do aliqua ut est anim labore consequat sit cupidatat dolore."
      },
      {
        "id": "5b0392b0af2ed7c57a21cc73",
        "name": "Grapeview",
        "isVeg": false,
        "price": 6,
        "category": "Desert",
        "numbersAddedToCart": 21,
        "description": "Nisi consequat et ut exercitation est dolore laborum culpa enim ad reprehenderit enim ea. Dolor aute velit amet irure aliquip ea reprehenderit duis id deserunt occaecat quis tempor. Magna amet id excepteur et. Veniam eiusmod occaecat et est cillum cupidatat voluptate consequat."
      },
      {
        "id": "5b0392b0195e059d0365fc94",
        "name": "Sandston",
        "isVeg": false,
        "price": 0,
        "category": "Main Course",
        "numbersAddedToCart": 33,
        "description": "Ipsum laborum proident aliquip reprehenderit deserunt voluptate deserunt. Veniam cupidatat ea adipisicing est eiusmod esse. Ea et consectetur amet voluptate aute consequat esse reprehenderit aliqua culpa dolore officia."
      },
      {
        "id": "5b0392b015394e169185cc3c",
        "name": "Axis",
        "isVeg": true,
        "price": 38,
        "category": "Main Course",
        "numbersAddedToCart": 36,
        "description": "Esse aliquip ullamco id culpa sint tempor aute velit nostrud laborum cillum laborum consectetur enim. Aliqua sint incididunt voluptate cillum ex sint nulla in nulla aute sint ex. Anim esse officia et eu laborum cillum consequat aute consectetur consequat aute deserunt. Quis ad laborum veniam minim reprehenderit exercitation elit qui occaecat elit dolore ad nisi in. Reprehenderit non ad excepteur amet sint."
      },
      {
        "id": "5b0392b0a40c2f61bc8ea28f",
        "name": "Lorraine",
        "isVeg": true,
        "price": 12,
        "category": "Starter",
        "numbersAddedToCart": 28,
        "description": "Anim ut irure sint ad et adipisicing. Minim laboris duis minim nulla anim ea in eiusmod tempor. Veniam laboris consequat aliquip dolor. Enim cillum nostrud labore tempor est aliquip aute. Eu occaecat elit ad aute amet. Dolor cillum pariatur amet mollit commodo irure ut sunt et exercitation."
      },
      {
        "id": "5b0392b0a561c66040081fed",
        "name": "Wadsworth",
        "isVeg": true,
        "price": 31,
        "category": "Starter",
        "numbersAddedToCart": 18,
        "description": "Laboris id sunt excepteur enim quis. Esse pariatur mollit ullamco aute ea officia qui elit. Amet id consectetur laborum est. Aute do velit aliquip est non laborum pariatur velit adipisicing. Reprehenderit duis nisi irure magna occaecat in ex ut commodo aliquip excepteur excepteur sint."
      },
      {
        "id": "5b0392b0bafe5849e8712aab",
        "name": "Rowe",
        "isVeg": true,
        "price": 6,
        "category": "Main Course",
        "numbersAddedToCart": 28,
        "description": "Dolor deserunt cillum cillum do laborum do occaecat do velit amet. Sunt esse cupidatat officia magna. Occaecat quis voluptate consectetur dolore amet amet cillum eiusmod dolor dolor consectetur adipisicing. Amet sit id eiusmod sunt reprehenderit velit reprehenderit. Ut sit excepteur amet aliqua consectetur est nisi Lorem officia nulla in sit. Et enim sit fugiat magna duis dolore dolore aliqua deserunt sunt veniam non excepteur proident."
      },
      {
        "id": "5b0392b01923cd1d8f7de0bd",
        "name": "Cochranville",
        "isVeg": true,
        "price": 10,
        "category": "Starter",
        "numbersAddedToCart": 5,
        "description": "Adipisicing dolor incididunt magna voluptate aute do velit ex ex velit ex nulla. Lorem reprehenderit nostrud incididunt cillum officia qui. Culpa culpa exercitation elit culpa dolor ad duis qui magna ad reprehenderit proident. Proident Lorem labore amet pariatur do aliqua ex. Laboris irure adipisicing sit ullamco minim officia anim sit culpa minim reprehenderit quis voluptate."
      },
      {
        "id": "5b0392b00d7f861b292e8ce5",
        "name": "Hinsdale",
        "isVeg": true,
        "price": 40,
        "category": "Main Course",
        "numbersAddedToCart": 33,
        "description": "Aliquip cupidatat irure tempor nulla veniam dolore. Aliqua minim aliqua nulla non. Ea enim duis enim deserunt laborum. Amet et qui eiusmod irure culpa ex et voluptate eu id irure. Reprehenderit enim consequat magna labore elit."
      },
      {
        "id": "5b0392b04871cb01123294ab",
        "name": "Floriston",
        "isVeg": false,
        "price": 23,
        "category": "Starter",
        "numbersAddedToCart": 28,
        "description": "Magna minim culpa deserunt dolore proident deserunt eu reprehenderit. Culpa pariatur eu amet consectetur nostrud labore est ea proident consectetur elit esse ipsum. Nostrud nisi nostrud excepteur proident pariatur id in aliquip dolor nisi elit in reprehenderit."
      },
      {
        "id": "5b0392b079ec3a2da6cbcfa0",
        "name": "Longoria",
        "isVeg": false,
        "price": 14,
        "category": "Starter",
        "numbersAddedToCart": 30,
        "description": "Et enim eiusmod consequat occaecat commodo sunt aliqua pariatur tempor veniam nisi cupidatat. Lorem minim incididunt ea esse. Consequat quis consequat officia commodo deserunt adipisicing. Sit enim magna aliquip amet eiusmod sint ut irure duis exercitation dolor duis. Non fugiat est ullamco voluptate aute aliqua nisi officia. Sit aute tempor laborum fugiat aliquip aliqua sunt consequat irure. Lorem exercitation aute velit mollit occaecat mollit id magna laborum anim deserunt fugiat irure id."
      },
      {
        "id": "5b0392b0325a5af3b9f7087c",
        "name": "Biddle",
        "isVeg": true,
        "price": 25,
        "category": "Desert",
        "numbersAddedToCart": 8,
        "description": "Velit est veniam aute consectetur magna occaecat ad laboris sunt aliqua enim. Quis et magna mollit laboris culpa culpa. Dolor reprehenderit cillum mollit ex sint qui eu. Ea nostrud dolore consectetur id fugiat consequat eu et. Quis excepteur ullamco esse eiusmod irure et anim ipsum."
      },
      {
        "id": "5b0392b0caaf96fd520a9867",
        "name": "Worcester",
        "isVeg": true,
        "price": 34,
        "category": "Starter",
        "numbersAddedToCart": 8,
        "description": "Amet nulla incididunt deserunt exercitation anim laborum pariatur officia labore. Cupidatat minim aute mollit fugiat eu exercitation in. Do labore cillum velit sunt qui ullamco duis reprehenderit dolor aliquip commodo ut."
      },
      {
        "id": "5b0392b094efb0e6144c57d2",
        "name": "Juntura",
        "isVeg": true,
        "price": 38,
        "category": "Desert",
        "numbersAddedToCart": 39,
        "description": "Duis sit labore excepteur nostrud commodo ad. Velit dolor sunt sunt sint incididunt pariatur quis adipisicing irure aliqua. Officia magna commodo incididunt dolore est cupidatat aliquip officia irure ea aute non ad dolor. Nostrud nulla sit est incididunt elit. Ea sit ullamco tempor excepteur mollit esse sunt. Sit aliqua id nulla commodo magna aute consequat Lorem duis exercitation cupidatat tempor ad. Fugiat non nostrud nisi culpa minim nostrud anim eu consequat consequat voluptate velit et."
      }
    ]);
  }
}
