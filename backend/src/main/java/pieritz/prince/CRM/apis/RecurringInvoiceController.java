package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.RecurringInvoice;
import pieritz.prince.CRM.services.RecurringInvoiceService;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/recurring-invoices")
@RestController
@CrossOrigin(originPatterns = "http://localhost:4200")
public class RecurringInvoiceController {

    private final RecurringInvoiceService recurringInvoiceService;

    @GetMapping("/get")
    public List<RecurringInvoice> getAllInvoices() {
        return (List<RecurringInvoice>) recurringInvoiceService.findAll();
    }

    @GetMapping("/{invoiceNumber}")
    public RecurringInvoice getInvoiceById(@PathVariable int invoiceNumber) {
        return recurringInvoiceService.findByInvoiceNumber(invoiceNumber);
    }

    @PostMapping("/create")
    public RecurringInvoice createInvoice(RecurringInvoice recurringInvoice) {
        return recurringInvoiceService.create(recurringInvoice);
    }

    @PutMapping("/update")
    public RecurringInvoice updateInvoice(RecurringInvoice recurringInvoice) {
        return recurringInvoiceService.update(recurringInvoice);
    }

    @DeleteMapping("/{invoiceNumber}")
    public void deleteInvoice(@PathVariable int invoiceNumber) {
        recurringInvoiceService.delete(invoiceNumber);
    }
}
