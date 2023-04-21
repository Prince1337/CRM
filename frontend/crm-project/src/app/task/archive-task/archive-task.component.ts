import { Component, OnInit } from '@angular/core';
import { ArchivedTask } from 'src/app/model/archived-task';
import { ArchivedTaskService } from 'src/app/services/archived-task.service';

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.scss']
})
export class ArchiveTaskComponent implements OnInit {
  archivedTasks: ArchivedTask[] = [];

  constructor(private archivedTaskService: ArchivedTaskService) { }

  ngOnInit(): void {
    this.getAllArchivedTasks();
  }

  getAllArchivedTasks(): void {
    this.archivedTaskService.getAllArchivedTasks().subscribe(
      data => {
        this.archivedTasks = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteArchivedTask(id: number): void {
    this.archivedTaskService.deleteArchivedTaskById(id).subscribe(
      () => {
        this.getAllArchivedTasks();
      },
      error => {
        console.log(error);
      }
    );
  }
}