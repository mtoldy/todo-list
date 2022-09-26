import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerMockService } from './shared/services/http-interceptors/server-mock.service';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    SharedModule,
    TodoModule,
  ],
  providers: [
    /** DON'T CHANGE NEXT LINE */
    { provide: HTTP_INTERCEPTORS, useClass: ServerMockService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
