import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
}, {
  toJSON: {
    virtuals: true,
  },
});

// create PostModel class from schema
const Note = mongoose.model('Note', NoteSchema);


export default Note;
