import { Component } from '@angular/core';
import { DocumentClass } from 'src/app/model/document-class';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  documents: DocumentClass[] = [];

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.getDocumentList();
  }

  getDocumentList(): void {
    this.documentService.getAllDocuments()
      .subscribe(documents => this.documents = documents);
  }

  createDocument(document: DocumentClass): void {
    this.documentService.createDocument(document)
      .subscribe(createdDocument => this.documents.push(createdDocument));
  }

  updateDocument(document: DocumentClass): void {
    this.documentService.updateDocument(document.id, document)
      .subscribe(updatedDocument => {
        const index = this.documents.findIndex(d => d.id === updatedDocument.id);
        this.documents[index] = updatedDocument;
      });
  }

  deleteDocument(id: number): void {
    this.documentService.deleteDocument(id)
      .subscribe(() => {
        const index = this.documents.findIndex(d => d.id === id);
        this.documents.splice(index, 1);
      });
  }
}
