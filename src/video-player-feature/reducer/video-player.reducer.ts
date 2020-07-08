import { createReducer, on, Action } from '@ngrx/store';

import * as videoPlayerActions from '../actions';
import { VideoData } from '../../entities';

export interface VideoPlayerState {
  bookmarkUrl: VideoData | null;
  removeBookmarkUrl: VideoData | null;
}

export const initialState: VideoPlayerState = {
  bookmarkUrl: null,
  removeBookmarkUrl: null
};

function onBookmarkAddRequest (state: VideoPlayerState, action: videoPlayerActions.BookmarkAction) {
  return Object.assign({...state}, {bookmarkUrl: {...action.data}});
}

function onBookmarkRemoveRequest (state: VideoPlayerState, action: videoPlayerActions.RemoveBookmarkAction) {
  return Object.assign({...state}, {removeBookmarkUrl: {...action.data}});
}

const videoPlayerReducer = createReducer(
  initialState,
  on(videoPlayerActions.bookmarkRequest, onBookmarkAddRequest),
  on(videoPlayerActions.removeBookmarkRequest, onBookmarkRemoveRequest)
);

export function reducer (state: VideoPlayerState | undefined, action: Action) {
  return videoPlayerReducer(state, action);
}