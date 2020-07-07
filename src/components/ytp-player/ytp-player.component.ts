import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ytp-player',
  templateUrl: './ytp-player.component.html',
  styleUrls: ['./ytp-player.component.css']
})
export class YtpPlayerComponent {
  @Input()
  public videoUrl = '';

  @Input()
  public bookmarket = false;

  @Output()
  public onBookmarkEvent: EventEmitter<void> = new EventEmitter<void>();

  public get buttonIcon() {
    return (this.bookmarket) ? 'star' : 'star_border'
  }

  public onBookmarkClick() {
    this.onBookmarkEvent.emit();
  }
}
