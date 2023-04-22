export class Message {
  id!: number;
  senderId!: string | null;
  receiverId!: string | null;
  date!: Date;
  subject!: string;
  body!: string;

}
