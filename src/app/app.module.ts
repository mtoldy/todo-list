import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/components/spinner.component';
import { ServerMockService } from './shared/services/http-interceptors/server-mock.service';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    TodoModule,
  ],
  providers: [
    /** DON'T CHANGE NEXT LINE */
    { provide: HTTP_INTERCEPTORS, useClass: ServerMockService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
