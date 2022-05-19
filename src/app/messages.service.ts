import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  messages: string[] = [];
  

  type: string = "good";

  add(message: string, type: string) {

    this.messages.push(type[0]+message);
    // this.type = type;
  }

  clear() {
    this.messages = [];
  }
}
