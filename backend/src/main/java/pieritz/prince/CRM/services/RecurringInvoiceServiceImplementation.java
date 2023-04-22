package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.RecurringInvoice;
import pieritz.prince.CRM.repositories.RecurringInvoiceRepository;

@RequiredArgsConstructor
@Service
public class RecurringInvoiceServiceImplementation implements RecurringInvoiceService {

    private final RecurringInvoiceRepository recurringInvoiceRepository;

    @Override
    public RecurringInvoice create(RecurringInvoice recurringInvoice) {
        return recurringInvoiceRepository.save(recurringInvoice);
    }

    public RecurringInvoice findByInvoiceNumber(int invoiceNumber) {
        return recurringInvoiceRepository.findRecurringInvoiceByInvoiceNumber(invoiceNumber);
    }

    @Override
    public Iterable<RecurringInvoice> findAll() {
        return recurringInvoiceRepository.findAll();
    }

    @Override
    public RecurringInvoice update(RecurringInvoice recurringInvoice) {
        return recurringInvoiceRepository.save(recurringInvoice);
    }

    @Override
    public void delete(int invoiceNumber) {
        recurringInvoiceRepository.delete(recurringInvoiceRepository.findRecurringInvoiceByInvoiceNumber(invoiceNumber));
    }
}
