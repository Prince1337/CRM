package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.RecurringInvoice;

public interface RecurringInvoiceService {
    RecurringInvoice create(RecurringInvoice recurringInvoice);

    RecurringInvoice findByInvoiceNumber(int invoiceNumber);

    Iterable<RecurringInvoice> findAll();

    RecurringInvoice update(RecurringInvoice recurringInvoice);

    void delete(int recurringInvoice);
}
