import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YtpButtonComponent } from './ytp-button';

const components = [ YtpButtonComponent ];

@NgModule({
  declarations: [...components],
  imports: [ CommonModule ],
  exports: [...components],
})
export class ComponentsModule {}
