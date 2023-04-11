package pieritz.prince.CRM.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.repositories.ContactRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ContactServiceImplementation implements ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImplementation(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    @Override
    public Contact getContactById(Long id) {
        Optional<Contact> contactOptional = contactRepository.findById(id);
        return contactOptional.orElse(null);
    }

    @Override
    public Contact getContactByEmail(String email) {
        return contactRepository.findByEmail(email);
    }

    @Override
    public Contact getContactByPhone(String phone) {
        return contactRepository.findByPhone(phone);
    }

    @Override
    public Contact getContactByFirstName(String firstName) {
        return contactRepository.findByFirstName(firstName);
    }

    @Override
    public Contact getContactByLastName(String lastName) {
        return contactRepository.findByLastName(lastName);
    }

    @Override
    public List<Contact> getContactsByCreatedAt(Date createdAt) {
        return contactRepository.findByCreatedAt(createdAt);
    }

    @Override
    public Contact getContactByEmailAndPhone(String email, String phone) {
        return contactRepository.findByEmailAndPhone(email, phone);
    }

    @Override
    public List<Contact> getContactsByCustomer(Customer customer) {
        return contactRepository.findByCustomer(customer);
    }

    @Override
    public Contact createContact(Contact contact) {
        contact.setCreatedAt(new Date());
        return contactRepository.save(contact);
    }

    @Override
    public Contact updateContact(Contact contact) {
        Optional<Contact> contactOptional = contactRepository.findById(contact.getId());
        if (contactOptional.isPresent()) {
            Contact existingContact = contactOptional.get();
            existingContact.setFirstName(contact.getFirstName());
            existingContact.setLastName(contact.getLastName());
            existingContact.setEmail(contact.getEmail());
            existingContact.setPhone(contact.getPhone());
            existingContact.setCustomer(contact.getCustomer());
            existingContact.setCreatedAt(new Date());
            return contactRepository.save(existingContact);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteContact(Long id) {
        // delete the contact by id
        Optional<Contact> contactOptional = contactRepository.findById(id);
        if (contactOptional.isPresent()) {
            contactRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}
