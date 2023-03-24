package pieritz.prince.CRM.services;

import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import pieritz.prince.CRM.domain.Customer;
import pieritz.prince.CRM.repositories.CustomerRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private CustomerServiceImplementation customerService;

    private List<Customer> customers;

    @BeforeAll
    void setUp() {
        MockitoAnnotations.openMocks(this);

        customers = new ArrayList<>();

        Customer customer1 = new Customer();
        customer1.setId(1L);
        customer1.setFirstName("Max");
        customer1.setLastName("Mustermann");
        customer1.setEmail("max.mustermann@test.com");
        customer1.setPhone("0123456789");

        Customer customer2 = new Customer();
        customer2.setId(2L);
        customer2.setFirstName("Anna");
        customer2.setLastName("Müller");
        customer2.setEmail("anna.mueller@test.com");
        customer2.setPhone("9876543210");

        customers.add(customer1);
        customers.add(customer2);

        Mockito.when(customerRepository.findById(1L)).thenReturn(Optional.of(customer1));
        Mockito.when(customerRepository.findById(2L)).thenReturn(Optional.of(customer2));
        Mockito.when(customerRepository.findById(3L)).thenReturn(Optional.empty());
        Mockito.when(customerRepository.findAll()).thenReturn(customers);
        Mockito.when(customerRepository.save(Mockito.any(Customer.class))).thenAnswer(i -> i.getArgument(0));
        Mockito.doNothing().when(customerRepository).deleteById(1L);
    }


    @Test
    public void testGetAllCustomers() {
        List<Customer> result = customerService.getAllCustomers();
        assertEquals(customers, result);
    }

    @Test
    public void testGetCustomerByIdWithExistingId() {
        Customer result = customerService.getCustomerById(1L);
        assertNotNull(result);
        assertEquals(1L, result.getId().longValue());
        assertEquals("Max", result.getFirstName());
    }

    @Test
    public void testGetCustomerByIdWithNonExistingId() {
        assertThrows(EntityNotFoundException.class, () -> customerService.getCustomerById(3L));
    }

    @Test
    public void testCreateCustomer() {
        Customer customer = new Customer();
        customer.setFirstName("Peter");
        customer.setLastName("Parker");
        customer.setEmail("peter.parker@test.com");
        customer.setPhone("0123456789");

        Customer result = customerService.createCustomer(customer);

        assertNotNull(result);
        assertEquals("Peter", result.getFirstName());
    }

    @Test
    public void testUpdateCustomer() {
        Customer customer = new Customer();
        customer.setFirstName("Max");
        customer.setLastName("Musterfrau");
        customer.setEmail("max.musterfrau@test.com");
        customer.setPhone("0123456789");

        Customer result = customerService.updateCustomer(1L, customer);

        assertNotNull(result);
        assertEquals("Musterfrau", result.getLastName());
    }

    @Test
    public void testDeleteCustomer() {
        customerService.deleteCustomer(1L);

        Mockito.verify(customerRepository, Mockito.times(1)).deleteById(1L);
    }

}