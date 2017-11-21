// Angular Module Decorator
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule} from '../shared/shared.module';

// Service
import { ChatService } from './chat.service';

// Components
import { ChatComponent } from './chat.component';

// Routes
const routes: Routes = [
  { path: '', component: ChatComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ChatComponent],
  providers: [ChatService]
})

export class ChatModule { }
