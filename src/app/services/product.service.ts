import { Injectable } from '@angular/core';
import { config } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, shareReplay } from 'rxjs';

import { ResponseWrapper } from '../products/model/responseWrapper';
import { GestionProductModel } from '../products/model/gestion-product.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = config.apiUrl;
  private remoteHost: string = config.remoteHost;
  iFrameUrl!: SafeResourceUrl;

  private products = new BehaviorSubject<GestionProductModel.Product[]>([]);
  public products$: Observable<GestionProductModel.Product[]> =
    this.products.asObservable();

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
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

  getProductById(id: number): Observable<GestionProductModel.Product> {
    let url = this.baseUrl + id;

    return this.http
      .get<GestionProductModel.Product>(url)
      .pipe(delay(1000), shareReplay());
  }

  getProductDetail(productId: number): SafeResourceUrl {
    let url = this.remoteHost + productId;
    //this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return url;
  }
}
