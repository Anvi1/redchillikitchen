import { Injectable } from "@angular/core";
import { ApiMainService } from "../services/service.pathconfig";

@Injectable()
export class ChillyOrderProvider {

  constructor(
    private apiMainService: ApiMainService
  ) {
  }

  placeOrder(order) {
    return this.apiMainService.placeOrder(order);
  }
}
