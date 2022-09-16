import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  constructor() { }

  calculateTotal(): number{
    let total = 0.0;
    this.items.forEach(item => total += item.amount*item.price);
    return total;
  }

  addItem(item: CartItem): void{
    this.items.push(item);
  }
}
