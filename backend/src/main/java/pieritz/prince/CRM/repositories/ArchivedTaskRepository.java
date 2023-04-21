package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pieritz.prince.CRM.domain.ArchivedTask;

public interface ArchivedTaskRepository extends JpaRepository<ArchivedTask, Long> {

}
