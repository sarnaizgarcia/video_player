import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface PlayVideoAction extends Action {
  data: VideoData
}

export const playVideoType = '[bookmar] play video from bookmar';

export const playVideoRequest = createAction(
  playVideoType,
  props<{ data: VideoData }>()
);