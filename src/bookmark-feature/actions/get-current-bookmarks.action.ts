import { Action, createAction } from '@ngrx/store';

export const getCurrentBookmarkType = '[bookmark] get current bookmark';

export const getCurrentBookmarkRequest = createAction(getCurrentBookmarkType);