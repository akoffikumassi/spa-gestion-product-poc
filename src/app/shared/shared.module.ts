import { NgModule } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { NotificationComponent } from './notification/notification.component';
import { HelloComponent } from './pages/hello/hello.component';
import { HomeComponent } from './pages/home/home.component';

const pagesComponents = [HomeComponent, HelloComponent];

@NgModule({
  declarations: [
    ...pagesComponents,
    ErrorDialogComponent,
    LoadingDialogComponent,
    NotificationComponent,
  ],
  imports: [
    ...pagesComponents,
    ErrorDialogComponent,
    LoadingDialogComponent,
    NotificationComponent,
  ],
  exports: [...pagesComponents],
  entryComponents: [
    ErrorDialogComponent,
    LoadingDialogComponent,
    NotificationComponent,
  ],
})
export class SharedModule {}
