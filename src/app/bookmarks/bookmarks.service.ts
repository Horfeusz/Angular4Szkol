import {Injectable} from '@angular/core';
import {Bookmark, BookmarkId} from './bookmarks.models';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookmarksService {

  private readonly baseUrl = 'http://localhost:3000/bookmarks';

  private _items: Bookmark[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Bookmark[]>(this.baseUrl).subscribe(items => this._items = items);
  }

  getAll(): Bookmark[] {
    return [...this._items];
  }

  add(item: Bookmark): void {
    this.http.post(this.baseUrl, item).subscribe(() => this._items = [...this._items, item]);
    // this._items = [...this._items, item];
  }

  async remove(id: BookmarkId): Promise<any> {
    // wer 1
    // this._items = this._items.filter(item => item.id !== id);

    // wer 2
    // this.http.delete(`${this.baseUrl}/${id}`)
    //  .subscribe(() => this._items = this._items.filter(item => item.id !== id));


    // Zamieniamy na obietnice
    try {
      console.log('remove', (new Date()).getTime());
      await this.http.delete(`${this.baseUrl}/${id}`).toPromise();
      console.log('remove', (new Date()).getTime());
      this._items = this._items.filter(item => item.id !== id);
    } catch (err) {
      console.error(err);
    }

  }

  has(id: BookmarkId): boolean {
    return this._items.some(item => item.id === id);
  }
}
