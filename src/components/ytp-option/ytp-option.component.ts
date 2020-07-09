import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option, KeyEventData } from '../../entities';

@Component({
  selector: 'ytp-option',
  templateUrl: './ytp-option.component.html',
  styleUrls: ['./ytp-option.component.css']
})
export class YtpOptionComponent {

  @Input()
  public option: Option;

  @Input()
  public index: number;

  @Output()
  public onSelect: EventEmitter<Option> = new EventEmitter<Option>();

  @Output()
  public onKeyPress: EventEmitter<KeyEventData> = new EventEmitter<KeyEventData>();


  public clickOnOption() {
    this.onSelect.emit(this.option)
  }

  public keyPressOnOption(event) {
    this.onKeyPress.emit({
      index: this.index,
      keyCode: event.code,
      data: this.option,
    })
  }
}
