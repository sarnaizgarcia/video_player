import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface RemoveVideoBookmarkAction extends Action {
  data: VideoData
}

export const removeVideoBookmarkType = '[bookmark] remove video from bookmark';

export const removeVideoBookmarkRequest = createAction(
  removeVideoBookmarkType,
  props<{ data: VideoData }>()
);