import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from './product.model'


// import  products  from  '../../assets/data.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem: ProductItem[];
  // =[
  //   new ProductItem(products[0].id,products[0].name,products[0].sku,products[0].imageUrl, products[0].description, products[0].price),
  //   new ProductItem(products[1].id,products[1].name,products[1].sku,products[1].imageUrl, products[1].description, products[1].price),
  //   new ProductItem(products[2].id,products[2].name,products[2].sku,products[2].imageUrl, products[2].description, products[2].price),
  //   new ProductItem(products[3].id,products[3].name,products[3].sku,products[3].imageUrl, products[3].description, products[3].price),
  //   new ProductItem(products[4].id,products[4].name,products[4].sku,products[4].imageUrl, products[4].description, products[4].price),
  //   new ProductItem(products[5].id,products[5].name,products[5].sku,products[5].imageUrl, products[5].description, products[5].price),
  //   new ProductItem(products[6].id,products[6].name,products[6].sku,products[6].imageUrl, products[6].description, products[6].price),
  // ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor() { }

  ngOnInit() {
    
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
  }


}
