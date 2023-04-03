import { Component } from '@angular/core';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent {
  projects = [
    { name: 'Project A', totalTasks: 20, completedTasks: 10, completionRate: 0.5 },
    { name: 'Project B', totalTasks: 10, completedTasks: 8, completionRate: 0.8 },
    { name: 'Project C', totalTasks: 5, completedTasks: 5, completionRate: 1 },
  ];
}
