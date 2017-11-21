import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from './chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;
  constructor(public chat: ChatService) { }
  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }
  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }
}
