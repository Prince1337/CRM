package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.Message;
import pieritz.prince.CRM.repositories.MessageRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImplementation implements MessageService {

    private final MessageRepository messageRepository;

    @Override
    public List<Message> getMessagesBySenderIdAndReceiverId(String senderId, String receiverId) {
        return messageRepository.findBySenderIdAndReceiverId(senderId, receiverId);
    }

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
}
