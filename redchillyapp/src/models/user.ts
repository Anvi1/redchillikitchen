export class ChillyUser {
  public name: string;
  public contact: number;
  public email: string;
  public addr1: string;
  public addr2: string;
  public addr3: string;
  public id: string;

  constructor(
    name: string,
    contact: number,
    email: string,
    addr1: string,
    addr2: string,
    id?: string,
  ) {
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.addr1 = addr1;
    this.addr2 = addr2;
    this.id = id;
  }
}