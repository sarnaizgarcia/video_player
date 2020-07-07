import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ytp-field',
  templateUrl: './ytp-field.component.html',
  styleUrls: ['./ytp-field.component.css']
})
export class YtpFieldComponent {

  @Input()
  public label: string

  @Input()
  public error = '';

  private fieldValue: string;

  @Input()
  get inputValue() {
    return this.fieldValue;
  }

  @Output()
  public inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public onBlur: EventEmitter<string> = new EventEmitter<string>();

  set inputValue(value) {
    this.fieldValue = value;
    this.inputValueChange.emit(value);
  }

  public blurField(event) {
    this.onBlur.emit(event.target.value);
  }
}
