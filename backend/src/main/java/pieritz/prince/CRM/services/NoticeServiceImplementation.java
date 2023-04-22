package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.Notice;
import pieritz.prince.CRM.repositories.NoticeRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NoticeServiceImplementation implements NoticeService {

    private final NoticeRepository noticeRepository;

    @Override
    public List<Notice> getAllNotices() {
        return noticeRepository.findAll();
    }

    @Override
    public Optional<Notice> getNoticeById(Long id) {
        return noticeRepository.findById(id);
    }

    @Override
    public Notice createNotice(Notice notice) {
        return noticeRepository.save(notice);
    }

    @Override
    public void deleteNotice(Notice notice) {
        noticeRepository.delete(notice);
    }
}
