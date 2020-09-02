import { Component, OnInit } from '@angular/core';
import { CartItem } from '../cart/cart.model';
import { DataService } from '../data.services';
import { ProductItem } from '../product/product.model'
import {Router} from "@angular/router"


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  cartTotal: number = 0;
  cartItems: CartItem[] = [];
  productItem: ProductItem[];
  cartId: number;

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getProducts().subscribe((data : any )=>{
      this.productItem = data.map(item => 
        new ProductItem(
          <number>Object.values(item)[0],
          <string>Object.values(item)[3],
          <string>Object.values(item)[4],
          <string>Object.values(item)[5],
          <string>Object.values(item)[6],
          <number>Object.values(item)[7],
          )
      );
    }); 

    this.updateCartTotal();
    
    this.data.createCart().subscribe((data : any )=>{
      this.cartId =  <number>Object.values(data)[3];
    });
    
  }

  onCartItemDeleted(productData:{productId: number}) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    this.cartItems.splice(index,1);
    this.updateCartTotal();
  }

  onCartItemChanged(productData:{productId: number}) {
    this.updateCartTotal();
  }

  onCartUpdated(productData: {
                productId: number,
                productName: string,
                productPrice: number} ) {
    const index = this.cartItems.findIndex( elem => elem.id == productData.productId )
    if (index===-1) {
      this.cartItems.push({
          id: productData.productId,
          name: productData.productName,
          quantity: 1,
          price: productData.productPrice,
          total: productData.productPrice * 1
      });
    } else {
      this.cartItems[index].id = productData.productId;
      this.cartItems[index].name = productData.productName;
      this.cartItems[index].quantity++;
      this.cartItems[index].price = productData.productPrice;
      this.cartItems[index].total = this.cartItems[index].price * this.cartItems[index].quantity;
    }
      this.updateCartTotal();
  }

  updateCartTotal() {
    //the code to update the total property of the cart
    let total = 0;
    this.cartItems.map( elem => total = total + elem.quantity*elem.price);
    this.cartTotal = total;
 }  
 
 onCartCheckout(productsCart:CartItem[]) {
  this.data.checkoutCart(this.cartId).subscribe();
  this.saveCartData(productsCart);
  this.router.navigate(['/checkout'])
}

  saveCartData(productsCart:CartItem[]){
    const registers = productsCart.map((item:CartItem)=>({
      product_id: item.id,
      cart_id: this.cartId,
      quantity: item.quantity
    }))

    this.data.registerPurchase(registers).subscribe();
  }

}
