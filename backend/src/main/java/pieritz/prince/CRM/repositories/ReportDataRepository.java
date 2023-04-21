package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pieritz.prince.CRM.domain.ReportData;

public interface ReportDataRepository extends JpaRepository<ReportData, Long> {
}
