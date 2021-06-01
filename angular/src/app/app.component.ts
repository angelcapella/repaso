import { Component, ɵɵtrustConstantResourceUrl } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  userInput='soy un texto';

  handleUserInput = (event : any) => {
    this.userInput = event.currentTarget.value;
  }
}
