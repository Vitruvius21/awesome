import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ewesome';

  constructor() {}

  method(): void {
    if (confirm('This will hack your PC, proceed?') === true) {
      window.location.href = '#';
    } else {
      alert('I was kidding :D');
    }
  }
}
