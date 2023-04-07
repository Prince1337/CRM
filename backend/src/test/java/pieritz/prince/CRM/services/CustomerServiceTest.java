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
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

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
        customer1.setCreatedAt(new Date(1000));

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
        when(customerRepository.findAll()).thenReturn(customers);
        List<Customer> customers = customerService.getAllCustomers();
        assertEquals(2, customers.size());
    }

    @Test
    public void testGetCustomerById() {
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customers.get(0)));
        Customer customer = customerService.getCustomerById(1L);
        assertEquals(customer, customer);
    }

    @Test
    public void testGetCustomerByIdNotFound() {
        when(customerRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(EntityNotFoundException.class, () -> {
            Customer customer = customerService.getCustomerById(1L);
            assertNull(customer);
        });
    }

    @Test
    public void testCreateCustomer() {
        Customer customer = new Customer();
        customer.setId(1L);
        customer.setFirstName("Max");
        customer.setLastName("Mustermann");
        customer.setEmail("max.mustermann@test.com");
        customer.setPhone("0123456789");
        customer.setCreatedAt(new Date(1000));
        when(customerRepository.save(Mockito.any(Customer.class))).thenAnswer(i -> i.getArgument(0));
        Customer createdCustomer = customerService.createCustomer(customer);
        assertEquals(customer, createdCustomer);
    }

    @Test
    public void testUpdateCustomer() {
        Customer customer = new Customer();
        customer.setId(1L);
        customer.setFirstName("Max");
        customer.setLastName("Mustermann");
        customer.setEmail("max.mustermann@test.com");
        customer.setPhone("0123456789");
        customer.setCreatedAt(new Date(1000));
        when(customerRepository.findById(1L)).thenReturn(Optional.of(customers.get(0)));
        Customer updatedCustomer = customerService.updateCustomer(1L, customer);
        assertEquals(customer, updatedCustomer);
    }

    @Test
    public void testDeleteCustomer() {
        customerService.deleteCustomer(1L);
        Mockito.verify(customerRepository, Mockito.times(1)).deleteById(1L);
    }

    @Test
    public void testGetCustomerByEmail() {
        when(customerRepository.findByEmail("max.mustermann@test.com")).thenReturn(customers.get(0));
        Customer customer = customerService.getCustomerByEmail("max.mustermann@test.com");
        assertEquals(customer, customer);
    }

    @Test
    public void testGetCustomerByEmailNotFound() {
        when(customerRepository.findByEmail("max.mustermann@test.com")).thenReturn(null);
        Customer customer = customerService.getCustomerByEmail("max.mustermann@test.com");
        assertNull(customer);
    }

    @Test
    public void testGetCustomerByPhone() {
        when(customerRepository.findByPhone("0123456789")).thenReturn(customers.get(0));
        Customer customer = customerService.getCustomerByPhone("0123456789");
        assertEquals(customer, customer);
    }

    @Test
    public void testGetCustomerByPhoneNotFound() {
        when(customerRepository.findByPhone("0123456789")).thenReturn(null);
        Customer customer = customerService.getCustomerByPhone("0123456789");
        assertNull(customer);
    }

    @Test
    public void testGetCustomerByFirstName() {
        when(customerRepository.findByFirstName("Max")).thenReturn(customers);
        List<Customer> customers1 = customerService.getCustomersByFirstName("Max");
        assertEquals(customers.get(0), customers1.get(0));

    }

    @Test
    public void testGetCustomerByFirstNameNotFound() {
        when(customerRepository.findByFirstName("Max")).thenReturn(null);
        List<Customer> customers1 = customerService.getCustomersByFirstName("Max");
        assertNull(customers1);
    }

    @Test
    public void testGetCustomerByLastName() {
        when(customerRepository.findByLastName("Mustermann")).thenReturn(customers);
        List<Customer> customers1 = customerService.getCustomersByLastName("Mustermann");
        assertEquals(customers.get(0), customers1.get(0));
    }

    @Test
    public void testGetCustomerByLastNameNotFound() {
        when(customerRepository.findByLastName("Mustermann")).thenReturn(null);
        List<Customer> customers1 = customerService.getCustomersByLastName("Mustermann");
        assertNull(customers1);
    }


}