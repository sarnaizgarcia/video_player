import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../selectors';
import { playVideoRequest } from '../actions';

@Component({
  selector: 'ytp-player-form-container',
  templateUrl: './ytp-player-form-container.component.html',
  styleUrls: ['./ytp-player-form-container.component.css']
})
export class YtpPlayerFormContainer {

  constructor( private store: Store<State> ) {}

  public onVideoSubmit(event) {
    const videoCode = event.videUrl.split('=')[1];
    const action = playVideoRequest({
      data: {
        tagName: event.tagName,
        youtubeUrl: videoCode
      }
    })

    this.store.dispatch(action);
  }
}
