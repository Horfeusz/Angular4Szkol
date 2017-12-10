import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowDetailsParams} from '../../app-routing.module';
import {TvMazeService} from '../tv-maze.service';
import {ShowDetails} from '../tv.models';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: ShowDetails;

  episodesLength = 2;

  constructor(private route: ActivatedRoute) {
    // const {id} = this.route.snapshot.params as ShowDetailsParams;

    // this.route.params.subscribe(p => console.log(p));

    // this.tv.getShow(id).subscribe(show => this.show = show);

    // this.route.data.subscribe(({show}) => this.show = show);

    this.show = this.route.snapshot.data.show;

    this.episodesLength = this.show._embedded.episodes.some(({number}) => number > 99) ? 3 : 2;
  }

  ngOnInit() {
  }

}
