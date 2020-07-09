import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface AddBookmarkAction extends Action {
  data: VideoData
}

export const addBookmarkType = '[bookmark] add new video to bookmark';

export const addBookmarkRequest = createAction(
  addBookmarkType,
  props<{ data: VideoData }>()
)