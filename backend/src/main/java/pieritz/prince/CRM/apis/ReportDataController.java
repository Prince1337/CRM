package pieritz.prince.CRM.apis;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pieritz.prince.CRM.domain.ReportData;
import pieritz.prince.CRM.services.ReportDataService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/report-data")
@CrossOrigin(originPatterns = "http://localhost:4200")
public class ReportDataController {

    private final ReportDataService reportDataService;

    @GetMapping
    public ResponseEntity<List<ReportData>> getAllReportData() {
        List<ReportData> reportDataList = reportDataService.getAllReportData();
        return new ResponseEntity<>(reportDataList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ReportData> createReportData(@RequestBody ReportData reportData) {
        ReportData newReportData = reportDataService.createReportData(reportData);
        return new ResponseEntity<>(newReportData, HttpStatus.CREATED);
    }
}
