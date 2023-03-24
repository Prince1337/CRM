package pieritz.prince.CRM.services;


import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;

import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();

    Contact getContactById(Long id);

    List<Contact> getContactsByCustomer(Customer customer);

    Contact createContact(Contact contact);

    Contact updateContact(Contact contact);

    boolean deleteContact(Long id);
}
