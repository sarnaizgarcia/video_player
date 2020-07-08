import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface BookmarkAction extends Action {
  data: VideoData
}

export const bookmarkRequestType = '[video player] book mark video';

export const bookmarkRequest = createAction(
  bookmarkRequestType,
  props<{ data: VideoData }>()
);
