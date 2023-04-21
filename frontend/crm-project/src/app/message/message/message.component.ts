import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  senderId!: string;
  receiverId!: string;
  messages!: Message[];

  constructor(private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.senderId = "2";
    this.receiverId = "1";
        this.messageService.getMessagesBySenderIdAndReceiverId(this.senderId, this.receiverId)
          .subscribe(messages => this.messages = messages);
    ;
  }

  sendMessage(body: string): void {
    const message = new Message();
    message.senderId = this.senderId;
    message.receiverId = this.receiverId;
    message.body = body;
    this.messageService.saveMessage(message)
      .subscribe(savedMessage => this.messages.push(savedMessage));
  }

}