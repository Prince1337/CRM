package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.Invoice;

@RepositoryRestResource
public interface InvoiceRepository extends JpaRepository <Invoice, Long> {

    Invoice findByInvoiceNumber(int invoiceNumber);
}
