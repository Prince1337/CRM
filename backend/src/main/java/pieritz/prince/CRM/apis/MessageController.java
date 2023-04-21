package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Message;
import pieritz.prince.CRM.services.MessageService;

import java.util.List;

@RestController
@RequestMapping("/messages")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "http://localhost:4200")
public class MessageController {
    private final MessageService messageService;

    @GetMapping("/{senderId}/{receiverId}")
    public List<Message> getMessagesBySenderIdAndReceiverId(@PathVariable String senderId, @PathVariable String receiverId) {
        return messageService.getMessagesBySenderIdAndReceiverId(senderId, receiverId);
    }

    @PostMapping("/")
    public Message saveMessage(@RequestBody Message message) {
        return messageService.saveMessage(message);
    }
}
