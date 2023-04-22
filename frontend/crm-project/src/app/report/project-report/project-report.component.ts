import { Component } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-report',
  templateUrl: './project-report.component.html',
  styleUrls: ['./project-report.component.scss']
})
export class ProjectReportComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getAllProjects();
  }

  getAllProjects(): void {
    this.projectService.getAllProjects()
      .subscribe(projects => this.projects = projects);
  }

  deleteProject(project: Project): void {
    this.projects = this.projects.filter(p => p !== project);
    this.projectService.deleteProjectById(project.id).subscribe();
  }
}
