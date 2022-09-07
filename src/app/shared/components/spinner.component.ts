import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`,
  styles: [
    ':host { display: none; align-items: center; justify-content: center; background: rgba(0,0,0, 0.4); position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; }',
    ':host(.visible) {display: flex;}'
  ],
})
export class SpinnerComponent {
    
}
