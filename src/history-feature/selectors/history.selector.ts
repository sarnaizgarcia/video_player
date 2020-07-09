import { createSelector } from '@ngrx/store';

import { FEATURE_PLAYER_FORM, PlayerFormState } from '../../player-form-feature';
import { HistoryState } from '../reducer';
import { VideoData } from '../../entities';

export const FEATURE_HISTORY = 'history';

export interface State {
  [FEATURE_HISTORY]: HistoryState
};

interface GlobalState {
  [FEATURE_HISTORY]: HistoryState,
  [FEATURE_PLAYER_FORM]: PlayerFormState
}

const videoToAddHistoryFeature = (state: GlobalState) => state[FEATURE_PLAYER_FORM];
const historyListFeature = (state: GlobalState) => state[FEATURE_HISTORY];

export const videoToAddHistorySelector = createSelector(
  videoToAddHistoryFeature,
  (state: PlayerFormState) => {
    return state.historyUrl || { tagName: '', youtubeUrl: '' }
  }
);

export const historyListSelector = createSelector(
  historyListFeature,
  (state: HistoryState) => state.history.map((videoData: VideoData) => ({...videoData}))
);