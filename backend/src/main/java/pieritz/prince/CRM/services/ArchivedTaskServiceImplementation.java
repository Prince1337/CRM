package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.ArchivedTask;
import pieritz.prince.CRM.repositories.ArchivedTaskRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArchivedTaskServiceImplementation implements ArchivedTaskService {

    private final ArchivedTaskRepository archivedTaskRepository;


    @Override
    public List<ArchivedTask> getAllArchivedTasks() {
        return archivedTaskRepository.findAll();
    }

    @Override
    public ArchivedTask getArchivedTaskById(Long id) {
        Optional<ArchivedTask> archivedTaskOptional = archivedTaskRepository.findById(id);
        if (archivedTaskOptional.isPresent()) {
            return archivedTaskOptional.get();
        }
        throw new RuntimeException("Archived Task with id " + id + " not found");
    }

    @Override
    public ArchivedTask saveArchivedTask(ArchivedTask archivedTask) {
        return archivedTaskRepository.save(archivedTask);
    }

    @Override
    public void deleteArchivedTaskById(Long id) {
        archivedTaskRepository.deleteById(id);
    }
}
