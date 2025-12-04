import { Note } from '../models/note';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res, next) => {
  const { noteId } = req.params;
  const notes = await Note.findById(noteId);
  if (!notes) {
    next(createHttpError(404, 'Student not found'));
    return;
  }

  res.status(200).json(notes);
};
export const createNote = async (req, res) => {};
