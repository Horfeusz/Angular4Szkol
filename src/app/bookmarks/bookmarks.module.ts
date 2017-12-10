import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarksService} from './bookmarks.service';
import {BookmarkAddComponent} from './bookmark-add/bookmark-add.component';
import {BookmarkRemoveComponent} from './bookmark-remove/bookmark-remove.component';
import {IsBookmarkedDirective} from './is-bookmarked.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookmarkAddComponent,
    BookmarkRemoveComponent,
    IsBookmarkedDirective],
  providers: [
    BookmarksService
  ],
  exports: [
    BookmarkAddComponent,
    BookmarkRemoveComponent,
    IsBookmarkedDirective
  ]
})
export class BookmarksModule {
}
