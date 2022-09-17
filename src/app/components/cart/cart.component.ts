import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  address: string = '';
  username: string = '';
  creditCardNumber: string = '';
  constructor(private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cart.items;
  }

  calculateTotal(): number{
    let total = 0.0;
    this.items.forEach(item => total += item.amount*item.price);
    return total;
  }

  confirm(): void{
    this.cart.total = this.calculateTotal();
    this.cart.username = this.username;
    this.cart.emptyCart();
    this.router.navigate(['/confirmation']);
  }


  removeItem(item: CartItem): void {
    this.cart.removeItem(item);
    this.items = this.cart.items;
  }

}
