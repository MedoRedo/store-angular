import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product!: Product;

  quantity: number = 1;

  constructor(private cart: CartService, private route: ActivatedRoute, private products: ProductsService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.products.getProducts().subscribe(res => 
        res.forEach(product =>{
          if(product.id == id)
            this.product = product;
        }));
  }

  addToCart(): void{
    const cartItem: CartItem = {
      name: this.product.name,
      amount: this.quantity,
      price: this.product.price,
      url: this.product.url
    };

    this.cart.addItem(cartItem);
    alert("Item added to your cart!");
    
    this.quantity = 1;
  }

}
