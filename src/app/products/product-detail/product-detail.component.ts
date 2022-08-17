import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  isIframeLoaded!: boolean;
  @ViewChild('iframeProductDetail', { read: ElementRef, static: true })
  iframeProductDetail!: ElementRef;
  private productId!: number;
  displayIFrame = false;
  iFrameUrl!: SafeResourceUrl;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productId = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
  }

  ngOnInit(): void {
    this.initDetailProducts();
  }

  initDetailProducts() {
    this.iFrameUrl = this.productService.getProductDetail(this.productId);
    this.setSrcDetailProduct(this.iFrameUrl);
  }

  setSrcDetailProduct(url: SafeResourceUrl): void {
    if (this.iframeProductDetail) {
      this.iframeProductDetail.nativeElement.setAttribute('src', url);
      this.displayIFrame = true;
    }
  }
}
