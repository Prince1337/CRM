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
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.services.CustomerService;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CustomerControllerTest {
    private MockMvc mockMvc;
    @InjectMocks
    private CustomerService customerService;
    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        customerService = mock(CustomerService.class);
        CustomerController customerController = new CustomerController(customerService);
        mockMvc = MockMvcBuilders.standaloneSetup(customerController).build();
        objectMapper = new ObjectMapper();
    }

    @Test
    public void createCustomerTest() throws Exception {
        Customer customer = new Customer();
        customer.setFirstName("Max");
        customer.setLastName("Mustermann");
        customer.setEmail("max.mustermann@example.com");
        customer.setPhone("+491234567890");
        customer.setCreatedAt(new Date());

        when(customerService.createCustomer(any(Customer.class))).thenReturn(customer);

        String customerJson = objectMapper.writeValueAsString(customer);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/customers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(customerJson))
                .andReturn();

        verify(customerService).createCustomer(any(Customer.class));
        assertEquals(200, result.getResponse().getStatus());
        assertEquals(customerJson, result.getResponse().getContentAsString());
    }

    @Test
    public void updateCustomerTest() throws Exception {
        Customer existingCustomer = new Customer();
        existingCustomer.setId(1L);
        existingCustomer.setFirstName("Max");
        existingCustomer.setLastName("Mustermann");
        existingCustomer.setEmail("max.mustermann@example.com");
        existingCustomer.setPhone("+491234567890");
        existingCustomer.setCreatedAt(new Date());

        Customer updatedCustomer = new Customer();
        updatedCustomer.setId(1L);
        updatedCustomer.setFirstName("Maximilian");
        updatedCustomer.setLastName("Mustermann");
        updatedCustomer.setEmail("max.mustermann@example.com");
        updatedCustomer.setPhone("+491234567890");
        updatedCustomer.setCreatedAt(new Date());

        when(customerService.getCustomerById(1L)).thenReturn(existingCustomer);
        when(customerService.updateCustomer(1L, updatedCustomer)).thenReturn(updatedCustomer);

        String updatedCustomerJson = objectMapper.writeValueAsString(updatedCustomer);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.put("/customers/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updatedCustomerJson))
                .andReturn();

        verify(customerService).updateCustomer(1L, updatedCustomer);
        assertEquals(200, result.getResponse().getStatus());
        assertEquals(updatedCustomerJson, result.getResponse().getContentAsString());
    }

    @Test
    public void deleteCustomerTest() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.delete("/customers/1"))
                .andReturn();

        verify(customerService).deleteCustomer(1L);
        assertEquals(200, result.getResponse().getStatus());
    }
}