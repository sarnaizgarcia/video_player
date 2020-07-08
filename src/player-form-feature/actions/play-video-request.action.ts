import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface VideoDataAction extends Action {
  data: VideoData
}

export const playVideoRequestType = '[player-video-form] play new video request';

export const playVideoRequest = createAction(
  playVideoRequestType,
  props<{ data: VideoData }>()
);