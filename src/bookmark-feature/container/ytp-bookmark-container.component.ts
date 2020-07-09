import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as bookmarkActions from '../actions';
import { bookmarkListSelector } from '../selectors';
import { videoToAddBookmarkSelector } from '../../video-player-feature';
import { playVideoRequest } from '../../history-feature';
import { Option, ListOptions, VideoData } from '../../entities';

@Component({
  selector: 'ytp-bookmark-container',
  templateUrl: './ytp-bookmark-container.component.html',
  styleUrls: ['./ytp-bookmark-container.component.css']
})
export class YtpBookmarkContainer implements OnInit, OnDestroy {

  public listOfOptions: ListOptions = [];

  public subscriptions: Subscription[] = [];

  constructor( private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(bookmarkActions.getCurrentBookmarkRequest());

    this.subscriptions.push(
      this.store.pipe(
        select(videoToAddBookmarkSelector),
        filter((videoData: VideoData) => (videoData.youtubeUrl !== '' && videoData.tagName !== ''))
      )
      .subscribe((videoData: VideoData) => {
        let action = null;
        const videoBookmarked = this.listOfOptions.find((option: Option) => option.value === videoData.youtubeUrl);

        if (videoBookmarked) {
          action = bookmarkActions.removeVideoBookmarkRequest({ data: videoData})
        } else {
          action = bookmarkActions.addBookmarkRequest({ data: videoData })
        }

        this.store.dispatch(action);
      })
    )

    this.subscriptions.push(
      this.store.pipe(
        select(bookmarkListSelector)
      )
      .subscribe((bookmarkList: VideoData[]) => {
        this.listOfOptions = bookmarkList.map((videoData: VideoData) => ({
          name: videoData.tagName,
          value: videoData.youtubeUrl
        }))
      })
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  public videoSelected(option: Option) {
    const action = playVideoRequest({
      data: {
        tagName: option.name,
        youtubeUrl: option.value
      }
    })

    this.store.dispatch(action);
  }
}
