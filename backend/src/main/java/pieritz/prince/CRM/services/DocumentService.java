package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Document;

import java.util.List;

public interface DocumentService {

    public List<Document> getAllDocuments();

    public Document createDocument(Document document);

    public Document updateDocument(Long id, Document documentDetails);

    public void deleteDocument(Long id);
}
