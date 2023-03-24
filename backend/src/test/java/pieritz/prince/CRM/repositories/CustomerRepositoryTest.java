package pieritz.prince.CRM.repositories;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import pieritz.prince.CRM.domain.Customer;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
class CustomerRepositoryTest {

    @Mock
    private CustomerRepository customerRepository;


    @Test
    public void testFindByLastName() {
        when(customerRepository.findByLastName("Smith")).thenReturn(Arrays.asList(new Customer("John", "Smith"), new Customer("Jane", "Smith")));

        List<Customer> customers = customerRepository.findByLastName("Smith");
        System.out.println(customers);

        assertThat(customers.size()).isEqualTo(2);
        assertThat(customers.get(0).getFirstName()).isEqualTo("John");
        assertThat(customers.get(0).getLastName()).isEqualTo("Smith");
        assertThat(customers.get(1).getFirstName()).isEqualTo("Jane");
        assertThat(customers.get(1).getLastName()).isEqualTo("Smith");
    }


}