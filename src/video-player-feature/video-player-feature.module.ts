import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { YtpVideoPlayerContainer } from './container';
import { FEATURE_VIDEO_PLAYER } from './selectors';
import { reducer } from './reducer';
import { ComponentsModule } from '../components';

@NgModule({
  declarations: [ YtpVideoPlayerContainer ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature(FEATURE_VIDEO_PLAYER, reducer)
  ],
  exports: [ YtpVideoPlayerContainer ]
})
export class VideoPlayerFeatureModule {}
