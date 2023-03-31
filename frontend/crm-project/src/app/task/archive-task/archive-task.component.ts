import { Component } from '@angular/core';

@Component({
  selector: 'app-archive-task',
  templateUrl: './archive-task.component.html',
  styleUrls: ['./archive-task.component.scss']
})
export class ArchiveTaskComponent {
  archivedTasks = [
    {
      name: 'Task 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-01-31'),
      status: 'Completed'
    },
    {
      name: 'Task 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      startDate: new Date('2022-02-01'),
      endDate: new Date('2022-02-28'),
      status: 'Completed'
    },
    {
      name: 'Task 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      startDate: new Date('2022-03-01'),
      endDate: new Date('2022-03-31'),
      status: 'Completed'
    }
  ];
}