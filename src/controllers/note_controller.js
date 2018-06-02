import Note from '../models/note_model';

export const createNote = (title) => {
  const note = new Note();
  note.title = title;
  note.x = 25;
  note.y = 25;
  return note.save();
};

export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id)
    .then((result) => {
      return result;
    });
};


export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
