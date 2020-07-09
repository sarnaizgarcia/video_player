import { createSelector } from '@ngrx/store';

import { PlayerFormState } from '../reducer';

export const FEATURE_PLAYER_FORM = 'playerForm';

export interface State {
  [FEATURE_PLAYER_FORM]: PlayerFormState
};

const playerFormFeature = (state: State) => state[FEATURE_PLAYER_FORM];

export const videoToPlayFromFormSelector = createSelector(
  playerFormFeature,
  (state: PlayerFormState) => {
    return state.urlToPlay || { tagName: '', youtubeUrl: '' }
  }
)

export const videoToAddHistorySelector = createSelector(
  playerFormFeature,
  (state: PlayerFormState) => {
    return state.historyUrl || { tagName: '', youtubeUrl: '' }
  }
);