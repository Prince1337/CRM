package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Project;
import pieritz.prince.CRM.services.ProjectService;

import java.util.List;

@RestController
@RequestMapping("/projects")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "http://localhost:4200")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @PostMapping
    public Project saveProject(@RequestBody Project project) {
        return projectService.saveProject(project);
    }

    @DeleteMapping("/{id}")
    public void deleteProjectById(@PathVariable Long id) {
        projectService.deleteProjectById(id);
    }
}
