import { NgModule } from '@angular/core';
import { HelloComponent } from './pages/hello/hello.component';
import { HomeComponent } from './pages/home/home.component';

const pagesComponents = [HomeComponent, HelloComponent];

@NgModule({
  declarations: [...pagesComponents],
  imports: [],
  exports: [...pagesComponents],
  entryComponents: [],
})
export class SharedModule {}
