package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.Document;
import pieritz.prince.CRM.repositories.DocumentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DocumentServiceImplementation implements DocumentService {

    private final DocumentRepository documentRepository;

    @Override
    public List<Document> getAllDocuments() {
        return documentRepository.findAll();
    }

    @Override
    public Document createDocument(Document document) {
        return documentRepository.save(document);
    }

    @Override
    public Document updateDocument(Long id, Document documentDetails) {
        return documentRepository.save(documentDetails);
    }

    @Override
    public void deleteDocument(Long id) {
        documentRepository.deleteById(id);
    }
}
