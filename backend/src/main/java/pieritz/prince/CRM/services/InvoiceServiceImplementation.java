package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Invoice;
import pieritz.prince.CRM.repositories.InvoiceRepository;

@RequiredArgsConstructor
@Service
public class InvoiceServiceImplementation implements InvoiceService {

    private final InvoiceRepository invoiceRepository;

    @Override
    public Iterable<Invoice> getAllInvoices() {
        return invoiceRepository.findAll();
    }

    @Override
    public Invoice getInvoiceByInvoiceNumber(int invoiceNumber) {
        return invoiceRepository.findByInvoiceNumber(invoiceNumber);
    }

    @Override
    public Invoice createInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }

    @Override
    public Invoice updateInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }

    @Override
    public void deleteInvoice(@PathVariable long id) {
        invoiceRepository.deleteById(id);
    }




}
