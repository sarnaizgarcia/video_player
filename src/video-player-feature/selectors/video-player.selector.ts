import { createSelector } from '@ngrx/store';
import { VideoPlayerState } from '../reducer';

export const FEATURE_VIDEO_PLAYER = 'videoPlayer';

export interface State {
  [FEATURE_VIDEO_PLAYER]: VideoPlayerState
};

const videoPlayerFeature = (state: State) => state[FEATURE_VIDEO_PLAYER];

export const videoToAddBookmarkSelector = createSelector(
  videoPlayerFeature,
  (state: VideoPlayerState) => {
    return state.bookmarkUrl || { tagName: '', youtubeUrl: '' };
  }
);