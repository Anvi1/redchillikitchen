import { MenuItem } from "./menuitem";

export class UserOrder {
  customerName: string;
  mobileNo: number;
  address: string;
  billingAmount: number;
  currentGST: number;
  orderTime: number = (new Date()).getTime();
  orderStatus: string = 'NEW';
  foodItemList: Array<{
    name: string,
    price: number,
    quantity: number,
  }>;

  constructor(
    customerName: string,
    mobileNo: number,
    address: string,
    billingAmount: number,
    currentGST: number,
    foodItemList: Array<{
      name: string,
      price: number,
      quantity: number,
    }>,
  ) {
    this.customerName = customerName;
    this.mobileNo = mobileNo;
    this.address = address;
    this.billingAmount = billingAmount;
    this.currentGST = currentGST;
    this.foodItemList = foodItemList;
  }

}