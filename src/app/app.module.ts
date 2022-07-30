import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { SharedModule } from './shared/shared.module';
//import { MaterialModule } from './materials/materials.module';

const moduleImports = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SharedModule,
  // MaterialModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...moduleImports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
