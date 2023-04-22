import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];
  selectedNote?: Note;
  errorMessage = '';
  title = '';
  content = '';

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getAllNotes()
      .subscribe(
        notes => this.notes = notes,
        error => this.errorMessage = error.message
      );
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }

  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title || !content) { return; }

    const newNote: Note = { title, content } as Note;
    this.noteService.createNote(newNote)
      .subscribe(
        note => {
          this.notes.push(note);
          this.selectedNote = undefined;
        },
        error => this.errorMessage = error.message
      );
  }

  update(): void {
    if (this.selectedNote) {
      this.noteService.updateNote(this.selectedNote.id, this.selectedNote)
        .subscribe(
          note => {
            const index = this.notes.findIndex(n => n.id === note.id);
            if (index >= 0) {
              this.notes[index] = note;
            }
            this.selectedNote = undefined;
          },
          error => this.errorMessage = error.message
        );
    }
  }
}