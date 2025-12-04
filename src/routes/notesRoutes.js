import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
} from '../controllers/notesController.js';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello!' });
});

router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

export default router;
