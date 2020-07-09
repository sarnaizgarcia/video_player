import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PlayerFormFeatureModule } from '../player-form-feature';
import { VideoPlayerFeatureModule } from '../video-player-feature';
import { HistoryFeatureModule } from '../history-feature';
import { RepositoryModule } from '../repositories';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayerFormFeatureModule,
    VideoPlayerFeatureModule,
    HistoryFeatureModule,
    RepositoryModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
