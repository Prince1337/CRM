import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Notice } from 'src/app/model/notice';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss'],
})
export class NoticeBoardComponent implements OnInit {
  notices: Notice[] = [];
  newNotice = new Notice();
  noticeForm!: FormGroup;
  errorMessage!: string;
  successMessage!: string;

  constructor(private noticeService: NoticeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.noticeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.getAllNotices();
  }

  getAllNotices(): void {
    this.noticeService.getAllNotices().subscribe(
      data => {
        this.notices = data;
      },
      error => {
        this.errorMessage = 'Error retrieving notices';
      }
    );
  }

  createNotice(): void {
    this.noticeService.createNotice(this.newNotice).subscribe(
      data => {
        this.successMessage = 'Notice created successfully';
        this.getAllNotices();
      },
      error => {
        this.errorMessage = 'Error creating notice';
      }
    );
  }

  deleteNotice(id: number): void {
    this.noticeService.deleteNotice(id).subscribe(
      data => {
        this.successMessage = 'Notice deleted successfully';
        this.getAllNotices();
      },
      error => {
        this.errorMessage = 'Error deleting notice';
      }
    );
  }
}
