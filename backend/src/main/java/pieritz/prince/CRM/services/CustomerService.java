package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Customer;

import java.util.Date;
import java.util.List;

public interface CustomerService {

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long id);

    Customer createCustomer(Customer customer);

    Customer updateCustomer(Long id, Customer customer);

    void deleteCustomer(Long id);

    Customer getCustomerByEmail(String email);

    Customer getCustomerByPhone(String phone);

    List<Customer> getCustomersByFirstName(String firstName);

    List<Customer> getCustomersByLastName(String lastName);

    Customer getCustomerByEmailAndPhone(String email, String phone);

    List<Customer> getCustomersByCreatedAt(Date createdAt);

    Customer getCustomerByLastNameAndFirstName(String lastName, String firstName);
}
