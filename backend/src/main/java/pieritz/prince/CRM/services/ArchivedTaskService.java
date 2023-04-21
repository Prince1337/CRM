package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.ArchivedTask;

import java.util.List;

public interface ArchivedTaskService {
    List<ArchivedTask> getAllArchivedTasks();

    ArchivedTask getArchivedTaskById(Long id);

    ArchivedTask saveArchivedTask(ArchivedTask archivedTask);

    void deleteArchivedTaskById(Long id);
}
