import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

const pagesComponents = [HomeComponent];

@NgModule({
  declarations: [...pagesComponents],
  imports: [],
  exports: [...pagesComponents],
  entryComponents: [],
})
export class SharedModule {}
