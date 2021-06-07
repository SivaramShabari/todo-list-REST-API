import express from 'express'
const router = express.Router()

import { getNotes, createNote, deleteNote, updateNote, getUserNotes } from '../controller/notes.js'
router.get('/one/:id', getNotes)
router.post('/', createNote)
router.get('/:uid', getUserNotes)
router.delete('/:id', deleteNote);
router.put('/:id', updateNote)

export default router