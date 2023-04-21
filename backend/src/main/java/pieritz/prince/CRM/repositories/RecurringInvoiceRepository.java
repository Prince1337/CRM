package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.RecurringInvoice;

@RepositoryRestResource
public interface RecurringInvoiceRepository extends JpaRepository<RecurringInvoice, Long> {

    RecurringInvoice findRecurringInvoiceByInvoiceNumber(int invoiceNumber);
}
