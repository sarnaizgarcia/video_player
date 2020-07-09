import { createSelector } from '@ngrx/store';

import { HistoryState } from '../reducer';
import { VideoData } from '../../entities';

export const FEATURE_HISTORY = 'history';

export interface State {
  [FEATURE_HISTORY]: HistoryState
};


const historyListFeature = (state: State) => state[FEATURE_HISTORY];


export const historyListSelector = createSelector(
  historyListFeature,
  (state: HistoryState) => state.history.map((videoData: VideoData) => ({...videoData}))
);

export const videoToPlayFromHistorySelector = createSelector(
  historyListFeature,
  (state: HistoryState) => {
    return state.urlToPlay || { tagName: '', youtubeUrl: '' }
  }
);


