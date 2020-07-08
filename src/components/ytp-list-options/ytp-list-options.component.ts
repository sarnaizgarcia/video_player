import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ListOptions } from './ytp-list-options-types';
import { Option, KeyEventData } from '../ytp-option';

@Component({
  selector: 'ytp-list-options',
  templateUrl: './ytp-list-options.component.html',
  styleUrls: ['./ypt-list-options.component.css']
})
export class YtpListOptionsComponent {

  @Input()
  public listOptions: ListOptions;

  @Input()
  public title: string;

  @ViewChild('elementsList') elementList: any;

  @Output()
  public onOptionSelected: EventEmitter<Option> = new EventEmitter<Option>();

  private sendOptionSelected(option: Option) {
    this.onOptionSelected.emit(option);
  }

  public keyPressed(event: KeyEventData) {
    const optionsElements = this.elementList.nativeElement.querySelectorAll('.option');
    let element: any = null;
    switch(event.keyCode) {
      case 'Enter':
        this.sendOptionSelected(event.data);
      break;
      case 'ArrowUp':
        element = (event.index === 0)
          ? optionsElements[optionsElements.length - 1]
          : optionsElements[event.index - 1];

        element.focus();
      break;
      case 'ArrowDown':
         element = (event.index === (optionsElements.length - 1))
          ? optionsElements[0]
          : optionsElements[event.index + 1];

        element.focus();
      break;
    }
  }

  public clickSelection(event: Option) {
    this.sendOptionSelected(event);
  }
}
