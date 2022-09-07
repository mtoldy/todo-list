import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { title: 'Home', url: '/' },
    { title: 'Todo list', url: '/todo' },
  ];

  constructor(public route: Router, public spinnerService: SpinnerService) {
  }
}
