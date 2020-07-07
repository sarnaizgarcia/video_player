import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ytpButtonSizes, ytpButtonTypes } from './ytp-button-types';

@Component({
  selector: 'ytp-button',
  templateUrl: './ytp-button.component.html',
  styleUrls: ['./ytp-button.component.css']
})
export class YtpButtonComponent {
  
  @Input()
  public size: ytpButtonSizes = ytpButtonSizes.NORMAL;

  @Input()
  public type: ytpButtonTypes = ytpButtonTypes.PRIMARY;

  @Input()
  public disabled: boolean = false;

  @Output()
  public clickButton: EventEmitter<void> = new EventEmitter<void>();

  get buttonType() {
    return (this.type === "primary") ? 'submit' : 'button';
  }

  public onClickButton() {
    if (!this.disabled) {
      this.clickButton.emit();
    }
  }
}
