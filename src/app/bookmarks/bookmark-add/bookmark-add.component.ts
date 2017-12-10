import {Component, Input, OnInit} from '@angular/core';
import {BookmarksService} from '../bookmarks.service';
import {Bookmark} from '../bookmarks.models';
import {Show} from '../../tv/tv.models';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.css']
})
export class BookmarkAddComponent {

  @Input() item: Bookmark;

  constructor(private bs: BookmarksService) {
  }

  saveBookmark(): void {
    // console.log(this.item);
    this.bs.add(this.item);
  }

  isBookmarked(): boolean {
    return this.bs.has(this.item.id);
  }


}
