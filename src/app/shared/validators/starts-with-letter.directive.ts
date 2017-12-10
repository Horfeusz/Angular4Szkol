import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {startsWithLetter} from './starts-with-letter-validator';

/**
 * useExisting zwraca instancje nowego lub istniejącego
 */
@Directive({
  selector: '[appStartsWithLetter]',
  providers: [{provide: NG_VALIDATORS, useExisting: StartsWithLetterDirective, multi: true}]
})
export class StartsWithLetterDirective implements Validator {

  @Input('appStartsWithLetter') upper = false; // tslint:disable-line:no-input-rename

  /**
   * Metoda która waliduje
   *
   * @param {AbstractControl} control
   * @returns {ValidationErrors | null}
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return startsWithLetter()(control);
  }

  constructor() {
  }

}
