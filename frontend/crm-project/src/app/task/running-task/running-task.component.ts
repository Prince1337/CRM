import { Component } from '@angular/core';

@Component({
  selector: 'app-running-tasks',
  templateUrl: './running-task.component.html',
  styleUrls: ['./running-task.component.scss']
})
export class RunningTaskComponent {
  tasks = [
    { name: 'Task 1' },
    { name: 'Task 2' },
    { name: 'Task 3' }
  ];
  
  completeTask(task: any) {
    // Logic to mark the task as completed
  }
}
