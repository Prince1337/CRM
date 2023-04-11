package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.Customer;

import java.util.Date;
import java.util.List;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    List<Customer> findByLastName(String lastName);

    List<Customer> findByFirstName(String firstName);

    Customer findByEmail(String email);

    Customer findByPhone(String phone);

    List<Customer> findByCreatedAt(Date createdAt);

    Customer findByEmailAndPhone(String email, String phone);

    Customer findByLastNameAndFirstName(String lastName, String firstName);

}
