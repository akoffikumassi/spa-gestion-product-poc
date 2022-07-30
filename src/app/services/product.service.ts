import { Injectable } from '@angular/core';
import { config } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, shareReplay } from 'rxjs';

import { ResponseWrapper } from '../products/model/responseWrapper';
import { GestionProductModel } from '../products/model/gestion-product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = config.apiUrl;

  private products = new BehaviorSubject<GestionProductModel.Product[]>([]);
  public products$: Observable<GestionProductModel.Product[]> =
    this.products.asObservable();

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts(): void {
    let url = this.baseUrl;

    this.http
      .get<ResponseWrapper<GestionProductModel.Product[]>>(url)
      .pipe(delay(1000), shareReplay())
      .subscribe((products) => {
        console.log('responseData', products.responseData);
        console.table(products.responseData);
        this.products.next(
          products.responseData as GestionProductModel.Product[]
        );
      });
  }
}
