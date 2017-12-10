import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Show, ShowDetails, ShowResponse} from './tv.models';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TvMazeService {

  private readonly _baseUrl = 'http://api.tvmaze.com';

  constructor(private http: HttpClient) {
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  /**
   * Wyszukiwanie filmów poprzez usługę
   *
   * @param {string} query
   * @returns {Observable<Show[]>}
   */
  searchShows(query: string): Observable<Show[]> {
    const url = `${this.baseUrl}/search/shows?q=${query}`;
    return this.http.get<ShowResponse[]>(url).map(response => response.map(({show}) => show));
  }

  getShow(id: string): Observable<ShowDetails> {
    const url = `${this.baseUrl}/shows/${id}?embed=episodes`;
    return this.http.get<ShowDetails>(url);
  }

}
