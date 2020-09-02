// import { Ingredient } from '../shared/ingredient.model';

export class ProductItem {
  public id: number;
  public name: string;
  public sku: string;
  public imageUrl: string;
  public description: string;
  public price: number;

  constructor(id: number, name: string, sku: string, description: string, imageUrl: string, price: number) {
    this.id = id;
    this.name = name;
    this.sku = sku;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}
