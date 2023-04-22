package pieritz.prince.CRM.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pieritz.prince.CRM.domain.Note;
import pieritz.prince.CRM.repositories.NoteRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteServiceImplementation implements NoteService {

    private final NoteRepository noteRepository;

    @Override
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }

    @Override
    public Note getNoteById(Long id) {
        return noteRepository.findById(id).orElse(null);
    }

    @Override
    public Note createNote(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public Note updateNote(Long id, Note note) {
        Note existingNote = noteRepository.findById(id).orElse(null);
        if (existingNote != null) {
            existingNote.setTitle(note.getTitle());
            existingNote.setBody(note.getBody());
            existingNote.setDate(note.getDate());
            return noteRepository.save(existingNote);
        } else {
            return null;
        }
    }

    @Override
    public void deleteNoteById(Long id) {
        noteRepository.deleteById(id);
    }
}

