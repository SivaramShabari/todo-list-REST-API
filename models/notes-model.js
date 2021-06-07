import mongoose from 'mongoose'
const notesSchema = mongoose.Schema({
    name: String,
    notes: String,
    due_date: Date,
    created_at: Date,
    uid: String,
    label: String,
    tests: [{ name: String }],
    isArchived: Boolean

})

const Notes = mongoose.model('Notes', notesSchema)

export default Notes