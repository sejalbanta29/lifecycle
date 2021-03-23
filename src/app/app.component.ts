import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycle';
  randomData: string = 'initial';

  constructor() {
    setTimeout(() => {
      this.randomData = 'final';
    }, 3000);
  }
}
