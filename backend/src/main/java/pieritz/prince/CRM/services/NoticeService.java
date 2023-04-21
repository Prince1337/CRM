package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Notice;

import java.util.List;
import java.util.Optional;

public interface NoticeService {
    List<Notice> getAllNotices();

    Optional<Notice> getNoticeById(Long id);

    Notice createNotice(Notice notice);

    void deleteNotice(Notice notice);
}
