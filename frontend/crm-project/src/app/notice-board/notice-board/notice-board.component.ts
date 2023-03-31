import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss'],
})
export class NoticeBoardComponent {
  notices: Notice[] = [
    {
      title: 'Notice 1',
      description: 'This is the first notice',
      date: new Date(),
    },
    {
      title: 'Notice 2',
      description: 'This is the second notice',
      date: new Date(),
    },
  ];

  newNotice: Notice = {
    title: '',
    description: '',
    date: new Date(),
  };

  addNotice(): void {
    this.newNotice.date = new Date();
    this.notices.push(this.newNotice);
    this.newNotice = { title: '', description: '', date: new Date() };
  }

  deleteNotice(notice: Notice): void {
    const index = this.notices.indexOf(notice);
    if (index !== -1) {
      this.notices.splice(index, 1);
    }
  }
}

interface Notice {
  title: string;
  description: string;
  date: Date;
}
