package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Project;

import java.util.List;

public interface ProjectService {
    List<Project> getAllProjects();

    Project saveProject(Project project);

    Project getProjectById(Long id);

    void deleteProjectById(Long id);
}
