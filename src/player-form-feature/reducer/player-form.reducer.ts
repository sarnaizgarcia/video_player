import { createReducer, on, Action } from '@ngrx/store';

import { VideoData } from '../../entities';
import * as playerFormActions from '../actions';

export interface PlayerFormState {
  urlToPlay: VideoData | null;
  historyUrl: VideoData | null;
}

export const initialState: PlayerFormState = {
  urlToPlay: null,
  historyUrl: null
};

function onPlayerVideoRequest (state: PlayerFormState, action: playerFormActions.VideoDataAction) {
  return Object.assign({...state}, { urlToPlay: {...action.data}, historyUrl: {...action.data }});
}

const playerFormReducer = createReducer(
  initialState,
  on(playerFormActions.playVideoRequest, onPlayerVideoRequest)
);

export function reducer (state: PlayerFormState | undefined, action: Action) {
  return playerFormReducer(state, action);
}