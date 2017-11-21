// app.routing.ts
// App Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// NotFoundComponent can`t be lazy loaded
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlertsComponent } from './sections/alerts/alerts.component';
// Routes
const routes: Routes = [
  { path: '', loadChildren: './sections/start.module#StartModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }

export const rc = [NotFoundComponent, WelcomeComponent, AlertsComponent];
