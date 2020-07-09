import { createSelector } from  '@ngrx/store';

import { FEATURE_VIDEO_PLAYER, VideoPlayerState } from '../../video-player-feature';
import { BookmarkState } from '../reducer';
import { VideoData } from '../../entities';

export const FEATURE_BOOKMARK = 'bookmark';

export interface State {
  [FEATURE_BOOKMARK]: BookmarkState
}

interface GlobalState {
  [FEATURE_BOOKMARK]: BookmarkState,
  [FEATURE_VIDEO_PLAYER]: VideoPlayerState
}

const videoPlayerBookmarkFeature = (state: GlobalState) => state[FEATURE_VIDEO_PLAYER];
const bookmarkListFeature = (state: GlobalState) => state[FEATURE_BOOKMARK];

export const videoPlayerBookmarkSelector = createSelector(
  videoPlayerBookmarkFeature,
  (state: VideoPlayerState) => {
    return state.bookmarkUrl || { tagName: '', youtubeUrl: '' }
  }
)

export const bookmarkListSelector = createSelector(
  bookmarkListFeature,
  (state: BookmarkState) => state.bookmark.map((videoData: VideoData) => ({...videoData}))
);
