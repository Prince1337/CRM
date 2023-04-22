package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pieritz.prince.CRM.domain.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
