import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  @Input() owner = 'To kurcze blaszka jestem ja :-)';

  @Output() timePass = new EventEmitter<number>();

  constructor() {
    setInterval(() => {
      this.timePass.emit(+new Date());
    }, 1000);
  }

  ngOnInit() {

  }

}
