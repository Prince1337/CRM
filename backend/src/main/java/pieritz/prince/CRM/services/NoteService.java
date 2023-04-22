package pieritz.prince.CRM.services;

import pieritz.prince.CRM.domain.Note;

import java.util.List;

public interface NoteService {
    List<Note> getAllNotes();

    Note getNoteById(Long id);

    Note createNote(Note note);

    Note updateNote(Long id, Note note);

    void deleteNoteById(Long id);
}
