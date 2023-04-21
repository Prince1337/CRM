package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.Notice;
import pieritz.prince.CRM.services.NoticeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/notices")
@RequiredArgsConstructor
@CrossOrigin(originPatterns = "http://localhost:4200")
public class NoticeController {
    private final NoticeService noticeService;

    @GetMapping
    public ResponseEntity<List<Notice>> getAllNotices() {
        List<Notice> notices = noticeService.getAllNotices();
        return new ResponseEntity<>(notices, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notice> getNoticeById(@PathVariable("id") Long id) {
        Optional<Notice> optionalNotice = noticeService.getNoticeById(id);
        return optionalNotice.map(notice -> new ResponseEntity<>(notice, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Notice> createNotice(@RequestBody Notice notice) {
        Notice createdNotice = noticeService.createNotice(notice);
        return new ResponseEntity<>(createdNotice, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNotice(@PathVariable("id") Long id) {
        Optional<Notice> optionalNotice = noticeService.getNoticeById(id);
        if (optionalNotice.isPresent()) {
            noticeService.deleteNotice(optionalNotice.get());
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
