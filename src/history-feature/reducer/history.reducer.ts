import { createReducer, on, Action } from '@ngrx/store';

import { VideoData } from '../../entities';
import * as historyActions from '../actions';

export interface HistoryState {
  loading: boolean;
  urlToPlay: VideoData | null;
  history: VideoData[];
}

export const initialState: HistoryState = {
  loading: false,
  urlToPlay: null,
  history: [],
}

function onPlayVideoRequest (state: HistoryState, action: historyActions.PlayVideoAction) {
  return Object.assign({...state}, { urlToPlay: {...action.data} });
}

function onAddHistoryRequest (state: HistoryState, action: historyActions.AddVideoHistoryAction) {
  return Object.assign({...state}, { loading: true });
}

function onHistorySave (state: HistoryState, action: historyActions.SaveVideoHistoryAction) {
  const newHistory = action.history
    .map((videoData: VideoData) => ({...videoData}));

  return Object.assign({...state}, { loading: false, history: [...newHistory]})
}

function onRequestCurrentHistory (state: HistoryState, action: Action) {
  return Object.assign({...state}, { loading: true })
}

const historyReducer = createReducer(
  initialState,
  on(historyActions.playVideoRequest, onPlayVideoRequest),
  on(historyActions.addVideoHistoryRequest, onAddHistoryRequest),
  on(historyActions.saveHistorySuccess, onHistorySave),
  on(historyActions.requestCurrentHistory, onRequestCurrentHistory)
);

export function reducer (state: HistoryState | undefined, action: Action) {
  return historyReducer(state, action);
}
