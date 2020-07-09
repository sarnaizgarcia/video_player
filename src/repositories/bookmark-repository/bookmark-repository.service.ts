import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VideoData } from '../../entities';

const BOOKMARK_KEY = 'bookmark';
@Injectable()
export class BookmarkRepositoryService {

  private getBookMark(): VideoData[] {
    let bookmark = JSON.parse(localStorage.getItem(BOOKMARK_KEY));

    if (!bookmark) {
      bookmark = [];
    }

    return bookmark;
  }

  public addBookmark(videoData: VideoData): Observable<VideoData[]> {
    const bookmark = this.getBookMark();

    if (videoData.tagName !== '' && videoData.youtubeUrl !== '') {
      bookmark.unshift(videoData);
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmark));
    }

    return of(bookmark)
  }

  public getCurrentBookMark(): Observable<VideoData[]> {
    return of(this.getBookMark())
  }

  public removeBookMark(videoData: VideoData): Observable<VideoData[]> {
    let bookmark = this.getBookMark()

    if (videoData.youtubeUrl !== '' && videoData.tagName !== '') {
      bookmark = bookmark.filter((video: VideoData) => video.youtubeUrl !== videoData.youtubeUrl );
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmark));
    }

    return of(bookmark);
  }

}