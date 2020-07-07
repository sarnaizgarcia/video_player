import { Component } from '@angular/core';

@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textValue: string = '';
  
  public onEvent(event) {
    console.log('NNN Event: ', event);
  }
}
