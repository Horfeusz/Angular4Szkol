import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ShowDetails} from '../tv.models';
import {Observable} from 'rxjs/Observable';
import {TvMazeService} from '../tv-maze.service';
import {ShowDetailsParams} from '../../app-routing.module';
import {Injectable} from '@angular/core';

/**
 * Nasz Resolver
 */
@Injectable()
export class ShowDetailsResolver implements Resolve<ShowDetails> {

  constructor(private tv: TvMazeService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ShowDetails> {
    const {id} = route.params as ShowDetailsParams;
    return this.tv.getShow(id);
  }

}
