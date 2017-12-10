import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

/**
 * Metoda sprawdza czy wartość kontrolki zaczyna się od litery i w zależności
 * od parametru że tylko duże.
 *
 * Jest to funkcja która zwraca funkcje
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export function startsWithLetter(upper = false): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const condtition = upper ? /^[A-Z]/ : /^[a-zA-Z]/;
    return condtition.test(control.value) ? null : {
      startsWithLetter: 'NO'
    };
  };
}
