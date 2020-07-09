import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { videoToPlayFromFormSelector } from '../../player-form-feature';
import { videoToPlayFromHistorySelector } from '../../history-feature';
import { VideoData } from '../../entities';
import { removeBookmarkRequest, bookmarkRequest } from '../actions';

@Component({
  selector: 'ytp-video-player-container',
  templateUrl: './video-player-container.component.html',
  styleUrls: ['./video-player-container.component.css']
})
export class YtpVideoPlayerContainer implements OnInit, OnDestroy{

  public isBookmarked: boolean = false;
  public subscriptions: Subscription[] = [];
  public tagName: string = ''
  public videoUrl: string = ''
  

  constructor( private store: Store<any>) {}

  ngOnInit() {
    this.subscriptions.push(
      this.store.pipe(
        select(videoToPlayFromFormSelector),
        filter(this.filterEmptyVideoData.bind(this))
      )
      .subscribe(this.setVideoData.bind(this))
    );

    this.subscriptions.push(
      this.store.pipe(
        select(videoToPlayFromHistorySelector),
        filter(this.filterEmptyVideoData.bind(this))
      )
        .subscribe(this.setVideoData.bind(this))
    )
  }

  private setVideoData(videoData: VideoData) {
    this.tagName = videoData.tagName;
    this.videoUrl = videoData.youtubeUrl;
  }

  private filterEmptyVideoData(videoData: VideoData) {
    const isEmptyObject = Object.keys(videoData).length === 0;
    return (!isEmptyObject && videoData.tagName !== '' && videoData.youtubeUrl !== '');
  }

  
  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  public bookMarkAction() {
    let action = null;

    if (this.isBookmarked) {
      action = removeBookmarkRequest({
        data: {
          tagName: this.tagName,
          youtubeUrl: this.videoUrl,
        }
      })
    } else {
      action = bookmarkRequest({
        data: {
          tagName: this.tagName,
          youtubeUrl: this.videoUrl
        }
      })
    }

    this.store.dispatch(action);
  }
}
