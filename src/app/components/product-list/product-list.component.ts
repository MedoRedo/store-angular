import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []; 
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(res =>{
        this.products = res
        console.table(this.products)
      }
    );
  }

}
