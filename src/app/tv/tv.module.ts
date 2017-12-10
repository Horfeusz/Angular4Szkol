import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {PosterComponent} from './poster/poster.component';
import {TvMazeService} from './tv-maze.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import { EpisodisePipe } from './episodise.pipe';

/*
ReactiveFormsModule dla formularzy reaktywnych
 */

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BookmarksModule
  ],
  declarations: [
    SearchComponent,
    PosterComponent,
    ShowDetailsComponent,
    EpisodisePipe
  ],
  providers: [TvMazeService]
})
export class TvModule {
}
