import Notes from '../models/notes-model.js'

export const getNotes = async (req, res) => {
    try {
        const post = await Notes.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
export const createNote = async (req, res) => {
    const note = req.body;
    const newNotes = new Notes(note);
    try {
        await newNotes.save()
        res.status(201).json(newNotes)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteNote = (req, res) => {
    Notes.remove({ _id: req.params.id })
        .then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))
}

export const updateNote = async (req, res) => {
    Notes.findById({ _id: req.params.id })
        .updateOne(req.body)
        .then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))
}

export const getUserNotes = async (req, res) => {
    try {
        const post = await Notes.find({ uid: req.params.uid })
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}