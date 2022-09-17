import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  username: string = '';
  total: number = 0.0;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.username = this.cart.username;
    this.total = this.cart.total;
  }

}
