package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.Contact;
import pieritz.prince.CRM.domain.Customer;

import java.util.Date;
import java.util.List;

@RepositoryRestResource
public interface ContactRepository extends JpaRepository<Contact, Long> {
    List<Contact> findByCustomer(Customer customer);
    Contact findByEmail(String email);
    Contact findByPhone(String phone);
    Contact findByFirstName(String firstName);
    Contact findByLastName(String lastName);
    List<Contact> findByCreatedAt(Date createdAt);
    Contact findByEmailAndPhone(String email, String phone);
}
