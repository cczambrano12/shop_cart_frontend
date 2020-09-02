import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CartItem } from './cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:8000/api/products');
  }

  createCart(){
    return this.http.post('http://localhost:8000/api/cart',{});
  }

  checkoutCart(cartId: number){
    // const params = new HttpParams()
    //         .set('id', cartId.toString());
    return this.http.put('http://localhost:8000/api/cart/'+cartId, null)
  }

  registerPurchase(purchaseData:{
    product_id: number,
    cart_id: number,
    quantity: number
  }[]){
    // console.log(purchaseData);
    return this.http.post('http://localhost:8000/api/product_cars', purchaseData);
  }
}