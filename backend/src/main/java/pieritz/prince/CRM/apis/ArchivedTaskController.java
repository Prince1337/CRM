package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.ArchivedTask;
import pieritz.prince.CRM.services.ArchivedTaskService;

import java.util.List;

@RestController
@RequestMapping("/archivedTasks")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "http://localhost:4200")
public class ArchivedTaskController {

    private final ArchivedTaskService archivedTaskService;

    @GetMapping
    public List<ArchivedTask> getAllArchivedTasks() {
        return archivedTaskService.getAllArchivedTasks();
    }

    @GetMapping("/{id}")
    public ArchivedTask getArchivedTaskById(@PathVariable Long id) {
        return archivedTaskService.getArchivedTaskById(id);
    }

    @PostMapping
    public ArchivedTask saveArchivedTask(@RequestBody ArchivedTask archivedTask) {
        return archivedTaskService.saveArchivedTask(archivedTask);
    }

    @DeleteMapping("/{id}")
    public void deleteArchivedTaskById(@PathVariable Long id) {
        archivedTaskService.deleteArchivedTaskById(id);
    }
}

