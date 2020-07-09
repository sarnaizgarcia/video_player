import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface UpdateBookmarkSuccessAction extends Action {
  bookmarkList: VideoData[]
}

export const updateBookmarkSuccessType = '[bookmark] update bookmark state';

export const updateBookmarkRequest = createAction(
  updateBookmarkSuccessType,
  props<{ bookmarkList: VideoData[] }>()
);
