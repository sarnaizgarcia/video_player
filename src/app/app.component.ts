import { Component } from '@angular/core';

import { Option } from '../components/ytp-option';

@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textValue: string = '';

  public option: Option = {
    name: 'Test',
    value: 'test01'
  }
  
  public onEvent(event) {
    console.log('NNN Event: ', event);
  }
}
