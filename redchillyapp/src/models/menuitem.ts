export class MenuItem {
  public id: string;
  public name: string;
  public price: number;
  public numbersAddedToCart: number;
  public description: string;

  constructor(
    id: string,
    name: string,
    price: number,
    numbersAddedToCart: number,
    description: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.numbersAddedToCart = numbersAddedToCart;
    this.description = description;
  }

}