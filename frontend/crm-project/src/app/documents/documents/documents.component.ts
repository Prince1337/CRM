import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  // Sample document data
  documents = [
    { name: 'Document 1', description: 'Description for Document 1' },
    { name: 'Document 2', description: 'Description for Document 2' },
    { name: 'Document 3', description: 'Description for Document 3' },
  ];

  // Variables for new document and selected document
  newDocument = { name: '', description: '' };
  selectedDocument = { name: '', description: '' };

  constructor() {}

  ngOnInit(): void {}

  // Function to show add document modal
  showAddDocumentModal() {}

  // Function to add a new document
  addDocument() {
    // Add new document to documents array
    this.documents.push(this.newDocument);
    // Clear newDocument variable
    this.newDocument = { name: '', description: '' };
    // Hide add document modal
  }

  // Function to show edit document modal
  showEditDocumentModal(document: any) {
    // Assign selected document to selectedDocument variable
    this.selectedDocument = document;
    // Show edit document modal
  }

  // Function to update selected document
  updateDocument() {
    // Loop through documents array to find selected document and update it
    for (let i = 0; i < this.documents.length; i++) {
      if (this.documents[i] == this.selectedDocument) {
        this.documents[i] = this.selectedDocument;
        break;
      }
    }
    // Clear selectedDocument variable
    this.selectedDocument = { name: '', description: '' };
    // Hide edit document modal
  }

  // Function to delete a document
  deleteDocument(document: any) {
    // Loop through documents array to find selected document and remove it
    for (let i = 0; i < this.documents.length; i++) {
      if (this.documents[i] == document) {
        this.documents.splice(i, 1);
        break;
      }
    }
  }
}
