// This is for Module Decoration
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Roouter for Root Modules
import { AppRoutingModule, rc } from './app.routing';
// Root Component
import { AppComponent } from './app.component';
// import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFirestoreModule.enablePersistence(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    rc
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
