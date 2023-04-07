package pieritz.prince.CRM.services;


import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;

import java.util.Date;
import java.util.List;

public interface ContactService {
    List<Contact> getAllContacts();

    Contact getContactById(Long id);

    Contact getContactByEmail(String email);

    Contact getContactByPhone(String phone);

    Contact getContactByFirstName(String firstName);

    Contact getContactByLastName(String lastName);

    List<Contact> getContactsByCreatedAt(Date createdAt);

    Contact getContactByEmailAndPhone(String email, String phone);

    List<Contact> getContactsByCustomer(Customer customer);

    Contact createContact(Contact contact);

    Contact updateContact(Contact contact);

    boolean deleteContact(Long id);
}
