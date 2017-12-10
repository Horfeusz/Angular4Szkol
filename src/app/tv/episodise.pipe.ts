import {Pipe, PipeTransform} from '@angular/core';
import {Episode} from './tv.models';
import {padStart} from 'lodash';

@Pipe({
  name: 'episodise'
})
export class EpisodisePipe implements PipeTransform {

  transform({number, season}: Episode, length = 2): string {
    const seasonPart = padStart(season.toString(), 2, '0');
    const episodePart = padStart(number.toString(), length, '0');
    return `S${seasonPart}E${episodePart}`;
  }

}
