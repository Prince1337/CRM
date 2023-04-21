package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.ReportData;

import java.util.List;

public interface ReportDataService {
    List<ReportData> getAllReportData();

    ReportData createReportData(ReportData reportData);
}
