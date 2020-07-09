import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { YtpHisotryContainer } from './container';
import { FEATURE_HISTORY } from './selectors'
import { reducer } from './reducer';
import { HistoryEffectsService } from './effects';
import { ComponentsModule } from '../components';

@NgModule({
  declarations: [ YtpHisotryContainer ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature( FEATURE_HISTORY, reducer),
    EffectsModule.forFeature([HistoryEffectsService])
  ],
  exports: [ YtpHisotryContainer ]
})
export class HistoryFeatureModule {}
