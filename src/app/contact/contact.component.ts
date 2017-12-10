import {Component, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';
import {StartsWithLetterDirective} from '../shared/validators/starts-with-letter.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = {
    email: '',

    message: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  showErrors(fieldRef: AbstractControl): boolean {
    return fieldRef.dirty && fieldRef.invalid;
  }
}
