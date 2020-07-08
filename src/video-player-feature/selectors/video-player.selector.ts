import { createSelector } from '@ngrx/store';

import { FEATURE_PLAYER_FORM, PlayerFormState } from '../../player-form-feature';
import { VideoPlayerState } from '../reducer';

export const FEATURE_VIDEO_PLAYER = 'videoPlayer';

export interface State {
  [FEATURE_VIDEO_PLAYER]: VideoPlayerState
};

interface GlobalState {
  [FEATURE_VIDEO_PLAYER]: VideoPlayerState,
  [FEATURE_PLAYER_FORM]: PlayerFormState
}

const videoToPlayFeature = (state: GlobalState) => state;

export const videoToPlaySelector = createSelector(
  videoToPlayFeature,
  (state: GlobalState) => {
    return state[FEATURE_PLAYER_FORM].urlToPlay
      || { tagName: '', youtubeUrl: '' }
  }
);