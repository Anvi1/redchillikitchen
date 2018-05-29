import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ChillyImageProvider {


  constructor() {
  }

  getCarouselImages() {
    return Observable.of([
      '../assets/imgs/c1.jpg',
      '../assets/imgs/c2.jpg'
    ])
  }
}