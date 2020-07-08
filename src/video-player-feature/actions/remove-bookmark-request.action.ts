import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface RemoveBookmarkAction extends Action {
  data: VideoData
}

export const removeBookmarkActionType = '[video player] remove book mark';

export const removeBookmarkRequest = createAction(
  removeBookmarkActionType,
  props<{ data: VideoData }>()
);