import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { historyListSelector} from '../selectors'
import { videoToAddHistorySelector } from '../../player-form-feature';
import { addVideoHistoryRequest, playVideoRequest, requestCurrentHistory } from '../actions';
import { Option, ListOptions, VideoData } from '../../entities';

@Component({
  selector: 'ytp-history-container',
  templateUrl: './ytp-history-container.component.html',
  styleUrls: ['./ytp-history-container.component.css']
})
export class YtpHisotryContainer implements OnInit, OnDestroy {

  public listOfOption$: Observable<ListOptions> = this.store.pipe(
    select(historyListSelector),
    map((history: VideoData[]) => history.map((videoData: VideoData) => ({
      name: videoData.tagName,
      value: videoData.youtubeUrl
    })))
  );

  public subscriptions: Subscription[] = [];

  constructor( private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(requestCurrentHistory());
    
    this.subscriptions.push(
      this.store.pipe(
        select(videoToAddHistorySelector),
        filter((videoData: VideoData) => (videoData.tagName !== '' && videoData.youtubeUrl !== ''))
      )
        .subscribe((videoToHistory: VideoData) => {
          if (videoToHistory.tagName !== '' && videoToHistory.youtubeUrl !== '') {
            const action = addVideoHistoryRequest({
              data: videoToHistory
            });
  
            this.store.dispatch(action)
          }
        })
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe()
    }
  }

  public videoSelected(option: Option) {
    const action = playVideoRequest({
      data: {
        tagName: option.name,
        youtubeUrl: option.value
      }
    });

    this.store.dispatch(action);
  }
}
