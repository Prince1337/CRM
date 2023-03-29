package pieritz.prince.CRM.apis;

import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.services.ContactService;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/create")
    @ResponseBody
    public Contact createContact(@RequestBody Contact contact) {
        return contactService.createContact(contact);
    }

    @PutMapping("/update/{id}")
    public Contact updateContact(@RequestBody Contact contact) {
        return contactService.updateContact(contact);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteContact(@PathVariable Long id) {
        return contactService.deleteContact(id);
    }

}
