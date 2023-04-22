package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.User;
import pieritz.prince.CRM.repositories.UserRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

}
