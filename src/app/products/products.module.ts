import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const moduleComponents = [ProductListComponent, ProductDetailComponent];
const moduleImports = [CommonModule, ProductsRoutingModule];
const moduleExports = [ProductListComponent, ProductDetailComponent];
const moduleServices = [ProductService];

@NgModule({
  declarations: [...moduleComponents],
  imports: [...moduleImports],
  exports: [...moduleExports],
  providers: [...moduleServices],
})
export class ProductsModule {}
