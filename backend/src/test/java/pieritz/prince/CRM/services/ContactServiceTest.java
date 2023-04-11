package pieritz.prince.CRM.services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.repositories.ContactRepository;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class ContactServiceTest {

    @InjectMocks
    private ContactServiceImplementation contactService;

    @Mock
    private ContactRepository contactRepository;

    private Contact contact1;
    private Contact contact2;
    private Customer customer;

    @BeforeEach
    public void setUp() throws Exception {
        MockitoAnnotations.openMocks(this);

        customer = new Customer();
        customer.setId(1L);
        customer.setFirstName("New");
        customer.setLastName("Customer");

        contact1 = new Contact();
        contact1.setId(1L);
        contact1.setFirstName("John");
        contact1.setLastName("Doe");
        contact1.setEmail("johndoe@test.com");
        contact1.setPhone("1234567890");
        contact1.setCreatedAt(new Date(1000));
        contact1.setCustomer(customer);

        contact2 = new Contact();
        contact2.setId(2L);
        contact2.setFirstName("Jane");
        contact2.setLastName("Doe");
        contact2.setEmail("janedoe@test.com");
        contact2.setPhone("0987654321");
        contact2.setCreatedAt(new Date(1000));
        contact2.setCustomer(customer);
    }

    @Test
    public void testGetAllContacts() {
        when(contactRepository.findAll()).thenReturn(Arrays.asList(contact1, contact2));
        List<Contact> contacts = contactService.getAllContacts();
        assertEquals(2, contacts.size());
    }

    @Test
    public void testGetContactById() {
        when(contactRepository.findById(1L)).thenReturn(java.util.Optional.of(contact1));
        Contact contact = contactService.getContactById(1L);
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactsByCustomer() {
        when(contactRepository.findByCustomer(customer)).thenReturn(Arrays.asList(contact1, contact2));
        List<Contact> contacts = contactService.getContactsByCustomer(customer);
        assertEquals(2, contacts.size());
    }

    @Test
    public void testCreateContact() {
        Contact newContact = new Contact();
        newContact.setFirstName("Adam");
        newContact.setLastName("Smith");
        newContact.setEmail("adam@test.com");
        newContact.setPhone("1111111111");
        newContact.setCustomer(customer);
        when(contactRepository.save(any(Contact.class))).thenReturn(newContact);
        Contact createdContact = contactService.createContact(newContact);
        assertNotNull(createdContact);
        assertEquals("Adam", createdContact.getFirstName());
    }

    @Test
    public void testUpdateContact() {
        when(contactRepository.findById(1L)).thenReturn(java.util.Optional.of(contact1));
        when(contactRepository.save(any(Contact.class))).thenReturn(contact1);
        Contact updatedContact = new Contact();
        updatedContact.setId(1L);
        updatedContact.setFirstName("Johnathan");
        updatedContact.setLastName("Doe");
        updatedContact.setEmail("johndoe@test.com");
        updatedContact.setPhone("1234567890");
        updatedContact.setCreatedAt(new Date());
        updatedContact.setCustomer(customer);
        Contact contact = contactService.updateContact(updatedContact);
        assertEquals("Johnathan", contact.getFirstName());
    }

    @Test
    public void testDeleteContact() {
        Long contactId = 1L;

        // Mocking the contactRepository to return the contact object when findById is called
        when(contactRepository.findById(contactId)).thenReturn(Optional.of(contact1));

        // Deleting the contact
        boolean isDeleted = contactService.deleteContact(contactId);

        // Verifying that the delete operation was successful
        assertTrue(isDeleted);

        // Verifying that the deleteById method was called with the correct argument
        verify(contactRepository, times(1)).deleteById(contactId);
    }

    @Test
    public void testNotDeleteContact() {
        Long contactId = 10L;
        // Deleting the contact
        boolean isDeleted = contactService.deleteContact(contactId);

        // Verifying that the delete operation was successful
        assertFalse(isDeleted);

        // Verifying that the deleteById method was called with the correct argument
        verify(contactRepository, never()).deleteById(contactId);

    }

    @Test
    public void testGetContactByEmail() {
        when(contactRepository.findByEmail("johndoe@test.com")).thenReturn(contact1);
        Contact contact = contactService.getContactByEmail("johndoe@test.com");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactByPhone() {
        when(contactRepository.findByPhone("1234567890")).thenReturn(contact1);
        Contact contact = contactService.getContactByPhone("1234567890");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactByEmailAndPhone() {
        when(contactRepository.findByEmailAndPhone("johndoe@test.com", "1234567890")).thenReturn(contact1);
        Contact contact = contactService.getContactByEmailAndPhone("johndoe@test.com", "1234567890");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactByEmailAndPhone2() {
        when(contactRepository.findByEmailAndPhone("johndoe@test.com", "0987654321")).thenReturn(contact1);
        Contact contact = contactService.getContactByEmailAndPhone("johndoe@test.com", "0987654321");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactByFirstName() {
        when(contactRepository.findByFirstName("John")).thenReturn(contact1);
        Contact contact = contactService.getContactByFirstName("John");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactByLastName() {
        when(contactRepository.findByLastName("Doe")).thenReturn(contact1);
        Contact contact = contactService.getContactByLastName("Doe");
        assertEquals("John", contact.getFirstName());
    }

    @Test
    public void testGetContactsByCreatedAt() {
        when(contactRepository.findByCreatedAt(new Date(1000))).thenReturn(Arrays.asList(contact1, contact2));
        List<Contact> contacts = contactService.getContactsByCreatedAt(new Date(1000));
        assertEquals(2, contacts.size());
    }




}