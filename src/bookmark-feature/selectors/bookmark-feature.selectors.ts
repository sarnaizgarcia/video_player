import { createSelector } from  '@ngrx/store';

import { BookmarkState } from '../reducer';
import { VideoData } from '../../entities';

export const FEATURE_BOOKMARK = 'bookmark';

export interface State {
  [FEATURE_BOOKMARK]: BookmarkState
}

interface GlobalState {
  [FEATURE_BOOKMARK]: BookmarkState,
}

const bookmarkListFeature = (state: GlobalState) => state[FEATURE_BOOKMARK];

export const bookmarkListSelector = createSelector(
  bookmarkListFeature,
  (state: BookmarkState) => state.bookmark.map((videoData: VideoData) => ({...videoData}))
);
