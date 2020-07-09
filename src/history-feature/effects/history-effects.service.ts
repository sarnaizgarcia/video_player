import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { concatMap, map} from 'rxjs/operators'

import { HistoryRepositoryService } from '../../repositories';
import * as historyActions from '../actions';
import { VideoData } from '../../entities';

@Injectable()
export class HistoryEffectsService {

  public addVideoInHistoryEffect = createEffect(
    () => this.action$
      .pipe(
        ofType(historyActions.addVideoHistoryType),
        concatMap((action: historyActions.AddVideoHistoryAction) => {
          return this.hisotryRepo.addVideoInHistory(action.data);
        }),
        map((history: VideoData[]) => {
          return historyActions.saveHistorySuccess({ history })
        })
      )
  );

  public requestCurrentHistoryEffect = createEffect(
    () => this.action$
      .pipe(
        ofType(historyActions.requestCurrentHistoryType),
        concatMap((action: Action) => {
          return this.hisotryRepo.getHistory()
        }),
        map((history: VideoData[]) => {
          return historyActions.saveHistorySuccess({ history })
        })
      )
  );

  constructor(
    private hisotryRepo: HistoryRepositoryService,
    private action$: Actions
  ) {}
}