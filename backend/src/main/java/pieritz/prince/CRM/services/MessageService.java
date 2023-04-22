package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Message;

import java.util.List;

public interface MessageService {

    public List<Message> getMessagesBySenderIdAndReceiverId(String senderId, String receiverId);

    public Message saveMessage(Message message);
}
