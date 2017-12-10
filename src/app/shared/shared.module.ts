import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartsWithLetterDirective} from './validators/starts-with-letter.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StartsWithLetterDirective],
  exports: [StartsWithLetterDirective]
})
export class SharedModule {
}
