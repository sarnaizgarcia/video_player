import { createReducer, on, Action } from '@ngrx/store';

import { VideoData } from '../../entities';
import * as bookmarkActions from '../actions';

export interface BookmarkState {
  loading: boolean;
  urlToPlay: VideoData | null;
  historyUrl: VideoData | null;
  bookmark: VideoData[];
}

export const initialState: BookmarkState = {
  loading: false,
  urlToPlay: null,
  historyUrl: null,
  bookmark: []
}

function onAddBookmarkRequest (state: BookmarkState, action: bookmarkActions.AddBookmarkAction) {
  return Object.assign({...state}, { loading: true });
}

function onGetCurrentBookmarks (state: BookmarkState, action: Action) {
  return Object.assign({...state}, { loading: true });
}

function onPlayVideoRequest (state: BookmarkState, action: bookmarkActions.PlayVideoAction) {
  return Object.assign({...state}, {
    urlToPlay: {...action.data},
    historyUrl: {...action.data}
  });
}

function onRemoveBookmarkRequest (state: BookmarkState, action: bookmarkActions.RemoveVideoBookmarkAction) {
  return Object.assign({...state}, { loading: true});
}

function onUpdateBookmarkSuccess (state: BookmarkState, action: bookmarkActions.UpdateBookmarkSuccessAction) {
  return Object.assign({...state}, {
    loading: false,
    bookmark: action.bookmarkList.map((videoData: VideoData) => ({...videoData}))
  });
}

const bookmarkReducer = createReducer(
  initialState,
  on(bookmarkActions.addBookmarkRequest, onAddBookmarkRequest),
  on(bookmarkActions.getCurrentBookmarkRequest, onGetCurrentBookmarks),
  on(bookmarkActions.playVideoRequest, onPlayVideoRequest),
  on(bookmarkActions.removeVideoBookmarkRequest, onRemoveBookmarkRequest),
  on(bookmarkActions.updateBookmarkRequest, onUpdateBookmarkSuccess)
);

export function reducer (state: BookmarkState | undefined, action: Action) {
  return bookmarkReducer(state, action);
}