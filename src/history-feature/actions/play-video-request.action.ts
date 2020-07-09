import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface PlayVideoAction extends Action {
  data: VideoData
};

export const playVideoRequestType = '[history] play video from history';

export const playVideoRequest = createAction(
  playVideoRequestType,
  props<{ data: VideoData }>()
);