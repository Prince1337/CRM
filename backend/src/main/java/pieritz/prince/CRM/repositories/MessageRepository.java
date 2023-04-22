package pieritz.prince.CRM.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pieritz.prince.CRM.domain.Message;

import java.util.List;

@RepositoryRestResource
public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findBySenderIdAndReceiverId(String senderId, String receiverId);
}
