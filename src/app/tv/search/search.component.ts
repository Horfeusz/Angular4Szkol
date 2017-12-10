import {Component} from '@angular/core';
import {Show} from '../tv.models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import {TvMazeService} from '../tv-maze.service';
import {BookmarksService} from '../../bookmarks/bookmarks.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {startsWithLetter} from '../../shared/validators/starts-with-letter-validator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  shows: Show[] = [];
  query = 'flash';
  searchForm: FormGroup;

  constructor(private tvs: TvMazeService,
              private bs: BookmarksService,
              private fb: FormBuilder) {

    // const queryCtrl = this.fb.control('vikings');
    // ...
    this.searchForm = this.fb.group({
      query: ['vikings', startsWithLetter()]
    });
    // this.search(queryCtrl.value);

    // queryCtrl.valueChanges.subscribe(c => console.log(c));

    // Opoznienie o sekunde
    this.searchForm.valueChanges
      .debounceTime(1000)
      .map(({query}) => query)
      .do(() => console.log(this.searchForm.controls.query.errors))
      .filter(() => this.searchForm.valid)
      .subscribe(this.search);
  }

  /**
   * Wyszukiwanie filmu po danym słowie
   *
   * @param {string} query
   */
  search = (query: string) => {
    this.tvs.searchShows(query).subscribe(shows => this.shows = shows);
  }

  get bookmarks(): Show[] {
    return this.bs.getAll() as Show[];
  }
}
