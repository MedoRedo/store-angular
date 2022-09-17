import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  total: number = 0;
  username: string = '';
  constructor() { }
  
  addItem(item: CartItem): void{
    this.items.push(item);
  }

  removeItem(item: CartItem): void{
    this.items = this.items.filter(i => item != i);
  }

  emptyCart(): void {
    this.items = [];
  }
}
