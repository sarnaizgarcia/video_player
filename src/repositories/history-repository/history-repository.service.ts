import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { VideoData } from '../../entities';

const HISTORY_KEY = 'history';

@Injectable()
export class HistoryRepositoryService {

  public addVideoInHistory(videoData: VideoData): Observable<VideoData[]> {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY));

    if (!history) {
      history = [];
    }

    if (videoData.tagName !== '' && videoData.youtubeUrl !== '') {
      history.push(videoData);

      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }

    return of(history);
  }

  public getHistory(): Observable<VideoData[]> {
    let history = JSON.parse(localStorage.getItem(HISTORY_KEY));

    if (!history) {
      history = [];
    }

    return of(history);
  }
}