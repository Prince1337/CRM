import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  messages = [
    {
      senderId: 'user1',
      receiverId: 'user2',
      subject: 'Hello',
      body: 'Hi there!',
      date: new Date('2023-03-29T09:00:00Z'),
    },
    {
      senderId: 'user2',
      receiverId: 'user1',
      subject: 'Re: Hello',
      body: 'How are you?',
      date: new Date('2023-03-29T09:01:00Z'),
    },
  ];
  currentUserId = 'user1';
  newMessage = {
    receiverId: '',
    subject: '',
    body: '',
  };

  sendMessage() {
    // send new message logic here
    this.messages.push({
      senderId: this.currentUserId,
      receiverId: this.newMessage.receiverId,
      subject: this.newMessage.subject,
      body: this.newMessage.body,
      date: new Date(),
    });
    this.newMessage = {
      receiverId: '',
      subject: '',
      body: '',
    };
  }

  deleteMessage(message: { senderId: string; receiverId: string; subject: string; body: string; date: Date; }) {
    // delete message logic here
    const index = this.messages.indexOf(message);
    if (index > -1) {
      this.messages.splice(index, 1);
    }
  }

  editMessage(message: any) {
    // edit message logic here
    // not implemented in this example
  }
}
