export class MenuItem {
  public id: string;
  public name: string;
  public price: number;
  public numbersAddedToCart: number;
  public description: string;
  public category: string;
  public isVeg: boolean;

  constructor(
    id: string,
    name: string,
    price: number,
    numbersAddedToCart: number,
    description: string,
    category: string,
    isVeg: boolean
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.numbersAddedToCart = 0;
    this.description = description;
    this.category = category;
    this.isVeg = isVeg;
  }

}