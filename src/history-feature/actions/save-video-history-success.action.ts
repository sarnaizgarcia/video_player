import { Action, createAction, props } from '@ngrx/store';

import { VideoData } from '../../entities';

export interface SaveVideoHistoryAction extends Action {
  history: VideoData[]
}

export const saveVideoHistoryActionType = '[history] update history list';

export const saveHistorySuccess = createAction(
  saveVideoHistoryActionType,
  props<{ history: VideoData[] }>()
);