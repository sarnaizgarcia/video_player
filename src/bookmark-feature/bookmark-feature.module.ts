import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from '../components';
import { YtpBookmarkContainer } from './container';
import { reducer } from './reducer';
import { FEATURE_BOOKMARK } from './selectors';
import { BookmarkEffectsService } from './effects';

@NgModule({
  declarations: [ YtpBookmarkContainer ],
  imports: [
    CommonModule,
    ComponentsModule,
    StoreModule.forFeature(FEATURE_BOOKMARK, reducer),
    EffectsModule.forFeature([BookmarkEffectsService])
  ],
  exports: [ YtpBookmarkContainer ]
})
export class BookmarkFeatureModule {}