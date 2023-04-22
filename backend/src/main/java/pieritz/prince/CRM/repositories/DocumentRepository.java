package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.Document;

@RepositoryRestResource
public interface DocumentRepository extends JpaRepository<Document, Long> {

}
