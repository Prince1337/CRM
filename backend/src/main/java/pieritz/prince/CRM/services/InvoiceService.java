package pieritz.prince.CRM.services;

import org.springframework.web.bind.annotation.PathVariable;
import pieritz.prince.CRM.domain.Invoice;

public interface InvoiceService {
    Iterable<Invoice> getAllInvoices();

    Invoice getInvoiceByInvoiceNumber(int invoiceNumber);

    Invoice createInvoice(Invoice invoice);

    Invoice updateInvoice(Invoice invoice);

    void deleteInvoice(@PathVariable long id);
}
