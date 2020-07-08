import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { YtpButtonComponent } from './ytp-button';
import { YtpFieldComponent } from './ytp-field';
import { YtpVideoFormComponent } from './ytp-video-form';
import { YtpPlayerComponent } from './ytp-player';
import { YtpOptionComponent } from './ytp-option';
import { YtpListOptionsComponent } from './ytp-list-options';

const components = [
  YtpButtonComponent,
  YtpFieldComponent,
  YtpVideoFormComponent,
  YtpPlayerComponent,
  YtpOptionComponent,
  YtpListOptionsComponent
];

@NgModule({
  declarations: [...components],
  imports: [ CommonModule, FormsModule ],
  exports: [...components],
})
export class ComponentsModule {}
