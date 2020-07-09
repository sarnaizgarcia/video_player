import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { concatMap, map } from 'rxjs/operators';

import { BookmarkRepositoryService } from '../../repositories';
import * as bookmarkActions from '../actions';
import { VideoData } from '../../entities';

@Injectable()
export class BookmarkEffectsService {

  public addVideoInBookmarkEffect = createEffect(
    () => this.action$
      .pipe(
        ofType(bookmarkActions.addBookmarkType),
        concatMap((action: bookmarkActions.AddBookmarkAction) => {
          return this.bookmarkRepo.addBookmark(action.data);
        }),
        map((bookmarkList: VideoData[]) => {
          return bookmarkActions.updateBookmarkRequest({ bookmarkList })
        })
      )
  );

  public removeVideoInBookmarkEffect = createEffect(
    () => this.action$
      .pipe(
        ofType(bookmarkActions.removeVideoBookmarkType),
        concatMap((action: bookmarkActions.RemoveVideoBookmarkAction) => {
          return this.bookmarkRepo.removeBookMark(action.data);
        }),
        map((bookmarkList: VideoData[]) => {
          return bookmarkActions.updateBookmarkRequest({ bookmarkList })
        })
      )
  );

  public requestCurrentBookmarksEffect = createEffect(
    () => this.action$
      .pipe(
        ofType(bookmarkActions.getCurrentBookmarkType),
        concatMap((action: Action) => {
          return this.bookmarkRepo.getCurrentBookMark()
        }),
        map((bookmarkList: VideoData[]) => {
          return bookmarkActions.updateBookmarkRequest({ bookmarkList })
        })
      )
  );

  constructor(
    private bookmarkRepo: BookmarkRepositoryService,
    private action$: Actions
  ) {}
}