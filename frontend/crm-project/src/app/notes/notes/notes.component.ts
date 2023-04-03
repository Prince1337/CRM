import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  notes: Note[] = [
    {
      title: 'Note 1',
      body: 'This is the first note',
      date: new Date(),
    },
    {
      title: 'Note 2',
      body: 'This is the second note',
      date: new Date(),
    },
  ];

  newNote: Note = {
    title: '',
    body: '',
    date: new Date(),
  };

  addNote() {
    if (this.newNote.title) {
      this.newNote.date = new Date();
      this.notes.push(this.newNote);
      this.newNote = {
        title: '',
        body: '',
        date: new Date(),
      };
    }
  }

  editNote(note: Note) {
    // code for editing a note
  }

  deleteNote(note: Note) {
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }
}

interface Note {
  title: string;
  body: string;
  date: Date;
}
