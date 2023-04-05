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
      body: 'Hello, send a lorem ipsum text',
      date: new Date('2023-03-29T09:00:00Z'),
    },
    {
      senderId: 'user2',
      receiverId: 'user1',
      subject: 'Re: Hello',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti illum, earum in similique fugiat architecto excepturi optio repellat id aut, quos consectetur rerum. Expedita nam debitis natus nemo perspiciatis consequatur quis a porro non dolor explicabo deserunt, tenetur veniam odit, dicta vel cum veritatis reiciendis sit maiores facere? Eum, ullam sequi! Sint saepe atque amet libero eveniet mollitia dolorum nisi minima alias doloribus, autem nulla, facilis eaque deleniti! Nobis, voluptatibus. Ex laudantium provident recusandae quidem hic, atque magni. Id veritatis nemo expedita architecto quo rerum nostrum adipisci dolorem accusamus, odio consectetur, rem amet dicta, vitae eligendi magni. Asperiores, ullam!',
      date: new Date(),
    },
    {
      senderId: 'user1',
      receiverId: 'user2',
      subject: 'Re: Re: Hello',
      body: 'Good Job',
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

}
