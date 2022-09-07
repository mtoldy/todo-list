import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerMockService } from './shared/services/http-interceptors/server-mock.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoModule } from './todo/todo.module';
import { SpinnerComponent } from './shared/components/spinner.component';

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
