import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface AddVideoHistoryAction extends Action {
  data: VideoData
}

export const addVideoHistoryType = '[history] add video in history list';

export const addVideoHistoryRequest = createAction(
  addVideoHistoryType,
  props<{ data: VideoData }>()
);