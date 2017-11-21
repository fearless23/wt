// This is for Module Decoration
import { NgModule } from '@angular/core';

// Modules
// import { SharedModule } from '../shared/shared.module';

// Roouter for Root Modules
import { StartRoutingModule, rc } from './start.routing';

// import { AuthGuard } from './../core/auth.guard';

@NgModule({
  imports: [
    // SharedModule,
    StartRoutingModule
  ],
  declarations: [rc],
  providers: [
    // AuthGuard
  ]
})

export class StartModule { }
