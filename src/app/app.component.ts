import { Component } from '@angular/core';

import { ListOptions } from '../components/ytp-list-options';

@Component({
  selector: 'ytp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textValue: string = '';

  public options: ListOptions = [
    {
      name: 'Test 01',
      value: 'test01'
    }, {
      name: 'Test 02',
      value: 'test02'
    }, {
      name: 'Test 03',
      value: 'test03'
    }, {
      name: 'Test 04',
      value: 'test04'
    },
  ];
  
  public onEvent(event) {
    console.log('NNN Event: ', event);
  }
}
