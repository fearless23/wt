import { NgModule } from '@angular/core';

// From Angular
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
// From Dependencies
// import { MomentModule } from 'angular2-moment';
// import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

// Shared Pipes: Declare and export
import { FilterPipe } from './pipes/filter.pipe';
import { LengthPipe } from './pipes/length.pipe';
import { ObservableFilterPipe } from './pipes/observable-filter.pipe';
import { StringSearchPipe } from './pipes/string-search.pipe';
import { TrueFalsePipe } from './pipes/true-false.pipe';

// Shared Directives: Declare and export
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  imports: [
    // CommonModule,
    // MomentModule,
    // NgxMyDatePickerModule
    // Import these if component inside this module need these
    // but we have no components so far
  ],
  declarations: [
    // // Pipes
    FilterPipe,
    LengthPipe,
    ObservableFilterPipe,
    StringSearchPipe,
    TrueFalsePipe,
    // Directives
    ClickOutsideDirective
    // Import these if component inside this module need these
    // but we have no components so far
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // Pipes
    FilterPipe,
    LengthPipe,
    ObservableFilterPipe,
    StringSearchPipe,
    TrueFalsePipe,
    // Directives
    ClickOutsideDirective
  ]
})
export class SharedModule { }
