package pieritz.prince.CRM.apis;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.InjectMocks;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.services.ContactService;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class ContactControllerTest {
    private MockMvc mockMvc;
    @InjectMocks
    private ContactService contactService;
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        contactService = mock(ContactService.class);
        ContactController contactController = new ContactController(contactService);
        mockMvc = MockMvcBuilders.standaloneSetup(contactController).build();
        objectMapper = new ObjectMapper();
    }

    @Test
    public void createContactTest() throws Exception {
        Contact contact = new Contact();
        contact.setFirstName("Max");
        contact.setLastName("Mustermann");
        contact.setEmail("max.mustermann@example.com");
        contact.setPhone("+491234567890");
        contact.setCreatedAt(new Date());
        Customer customer = new Customer();
        customer.setId(1L);
        contact.setCustomer(customer);

        when(contactService.createContact(any(Contact.class))).thenReturn(contact);

        String contactJson = objectMapper.writeValueAsString(contact);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/contacts/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(contactJson))
                .andReturn();

        verify(contactService).createContact(any(Contact.class));
        assertEquals(200, result.getResponse().getStatus());
        assertEquals(contactJson, result.getResponse().getContentAsString());
    }

    @Test
    public void updateContactTest() throws Exception {
        Contact existingContact = new Contact();
        existingContact.setId(1L);
        existingContact.setFirstName("Max");
        existingContact.setLastName("Mustermann");
        existingContact.setEmail("max.mustermann@example.com");
        existingContact.setPhone("+491234567890");
        existingContact.setCreatedAt(new Date());

        Contact updatedContact = new Contact();
        updatedContact.setId(1L);
        updatedContact.setFirstName("Maximilian");
        updatedContact.setLastName("Mustermann");
        updatedContact.setEmail("max.mustermann@example.com");
        updatedContact.setPhone("+491234567890");
        updatedContact.setCreatedAt(new Date());

        when(contactService.getContactById(1L)).thenReturn(existingContact);
        when(contactService.updateContact(updatedContact)).thenReturn(updatedContact);

        String updatedCustomerJson = objectMapper.writeValueAsString(updatedContact);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.put("/contacts/update/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedCustomerJson))
                .andReturn();

        verify(contactService).updateContact(updatedContact);
        assertEquals(200, result.getResponse().getStatus());
        assertEquals(updatedCustomerJson, result.getResponse().getContentAsString());
    }

    @Test
    public void deleteCustomerTest() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.delete("/contacts/delete/1"))
                .andReturn();

        verify(contactService).deleteContact(1L);
        assertEquals(200, result.getResponse().getStatus());
    }

}
