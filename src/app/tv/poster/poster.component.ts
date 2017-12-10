import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewEncapsulation} from '@angular/core';
import {Show} from '../tv.models';
import {get} from 'lodash';
import {isUndefined} from 'util';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // To jest wartość domyślna
  changeDetection: ChangeDetectionStrategy.OnPush // Czyli dokładnie co to jest ?
})
export class PosterComponent implements OnChanges {

  @Input() show: Show;

  @Input() size: 'md';

  posterUrl: string;

  private placeholder = 'https://www.fillmurray.com/g/680/1000';

  constructor() {
  }

  ngOnChanges() {
    const sizeDict = {
      lg: 'original',
      md: 'medium'
    };

    if (this.show) {
      if (isUndefined(this.size)) {
        this.size = 'md';
      }

      const key = sizeDict[this.size];

      // console.log('show', this.show, 'key', key, 'size', this.size);

      if (key) {
        this.posterUrl = get(this.show, ['image', key], this.placeholder);
      }
    }

  }

}
