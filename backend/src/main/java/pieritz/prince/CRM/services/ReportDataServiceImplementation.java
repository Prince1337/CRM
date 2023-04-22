package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.ReportData;
import pieritz.prince.CRM.repositories.ReportDataRepository;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportDataServiceImplementation implements ReportDataService {

    private final ReportDataRepository reportDataRepository;

    @Override
    public List<ReportData> getAllReportData() {
        return reportDataRepository.findAll();
    }

    @Override
    public ReportData createReportData(ReportData reportData) {
        reportData.setCreatedAt(new Date());
        return reportDataRepository.save(reportData);
    }
}
