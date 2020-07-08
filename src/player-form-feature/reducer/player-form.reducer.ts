import { createReducer, on, Action } from '@ngrx/store';

import { VideoData } from '../entities';
import * as playerFormActions from '../actions';

export interface NewPlayerFormState {
  urlToPlay: string;
  historyUrl: VideoData | null;
}

export const initialState: NewPlayerFormState = {
  urlToPlay: '',
  historyUrl: null
};

function onPlayerVideoRequest (state: NewPlayerFormState, action: playerFormActions.VideoDataAction) {
  console.log('NNN action data: ', action.data);
  return Object.assign({...state}, { urlToPlay: action.data.youtubeUrl, historyUrl: {...action.data }});
}

const playerFormReducer = createReducer(
  initialState,
  on(playerFormActions.playVideoRequest, onPlayerVideoRequest)
);

export function reducer (state: NewPlayerFormState | undefined, action: Action) {
  return playerFormReducer(state, action);
}