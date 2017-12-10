import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';
import {Bookmark} from './bookmarks.models';
import {BookmarksService} from './bookmarks.service';

@Directive({
  selector: '[appIsBookmarked]'
})
export class IsBookmarkedDirective {

  @Input('appIsBookmarked') appIsBookmarked: Bookmark;

  @HostBinding('class.opaque')
  isOpaque = false;

  constructor(private bs: BookmarksService) {
  }

  @HostBinding('class.bookmarked')
  get isBookmarked(): boolean {
    return this.bs.has(this.appIsBookmarked.id);
  }

  @HostListener('click', ['$event.target'])
  toggleOpaque(target: HTMLElement) {
    if (target.tagName === 'IMG') {
      this.isOpaque = !this.isOpaque;
    }
  }

}
