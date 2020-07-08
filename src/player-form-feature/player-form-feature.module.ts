import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from '../components';
import { YtpPlayerFormContainer } from './container'
import { reducer } from './reducer';
import { FEATURE_PLAYER_FORM } from './selectors';

@NgModule({
  declarations: [ YtpPlayerFormContainer ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature(FEATURE_PLAYER_FORM, reducer)
  ],
  exports: [ YtpPlayerFormContainer ],
})
export class PlayerFormModuleModule {}
