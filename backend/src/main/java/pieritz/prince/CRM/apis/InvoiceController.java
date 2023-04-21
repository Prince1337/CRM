package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Invoice;
import pieritz.prince.CRM.services.InvoiceService;

import java.util.List;

@RestController
@RequestMapping("/invoices")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "http://localhost:4200")
public class InvoiceController {

    private final InvoiceService invoiceService;

    @GetMapping("/")
    public List<Invoice> getAllInvoices() {
        return (List<Invoice>) invoiceService.getAllInvoices();
    }

    @GetMapping("/{id}")
    public Invoice getInvoiceById(int invoiceNumber) {
        return invoiceService.getInvoiceByInvoiceNumber(invoiceNumber);
    }

    @PostMapping("/create")
    public Invoice createInvoice(Invoice invoice) {
        return invoiceService.createInvoice(invoice);
    }

    @PutMapping
    public Invoice updateInvoice(Invoice invoice) {
        return invoiceService.updateInvoice(invoice);
    }

    @DeleteMapping("/{invoiceNumber}")
    public void deleteInvoice(@PathVariable int invoiceNumber) {
        invoiceService.deleteInvoice(invoiceNumber);
    }
}

