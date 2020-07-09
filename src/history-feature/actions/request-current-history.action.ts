import { createAction } from '@ngrx/store';

export const requestCurrentHistoryType = '[history] request current history';

export const requestCurrentHistory = createAction(requestCurrentHistoryType);