import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { GestionProductModel } from '../model/gestion-product.interface';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<GestionProductModel.Product[]>;
  selectedProduct!: GestionProductModel.Product;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$.pipe(
      filter((products) => products.length > 0)
    );
  }

  onSelect(product: GestionProductModel.Product) {
    console.log('product', product);
    this.selectedProduct = product;
    this.router.navigateByUrl('/products/detail/' + product.id);
  }
}
