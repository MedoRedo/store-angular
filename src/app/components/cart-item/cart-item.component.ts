import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  item!: CartItem;

  @Output()
  removeItem: EventEmitter<CartItem> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
