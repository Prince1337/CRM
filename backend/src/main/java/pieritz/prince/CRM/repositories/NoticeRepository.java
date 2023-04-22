package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pieritz.prince.CRM.domain.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
