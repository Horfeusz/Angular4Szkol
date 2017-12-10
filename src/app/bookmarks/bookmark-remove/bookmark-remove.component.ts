import {Component, Input} from '@angular/core';
import {BookmarksService} from '../bookmarks.service';
import {Bookmark} from '../bookmarks.models';

@Component({
  selector: 'app-bookmark-remove',
  templateUrl: './bookmark-remove.component.html',
  styleUrls: ['./bookmark-remove.component.css']
})
export class BookmarkRemoveComponent {

  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) {
  }

  remove(): void {
    if (this.item) {
      this.bs.remove(this.item.id);
    }
  }

  isBookmarked(): boolean {
    return !this.bs.has(this.item.id);
  }

}
