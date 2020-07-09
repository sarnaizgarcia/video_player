import { NgModule } from '@angular/core';

import { HistoryRepositoryService } from './history-repository';
import { BookmarkRepositoryService } from './bookmark-repository';

@NgModule({
  providers: [
    HistoryRepositoryService,
    BookmarkRepositoryService
  ],
})
export class RepositoryModule {}