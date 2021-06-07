import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import notesRoutes from './routes/notes.js'
import userRoutes from './routes/users.js'
const app = express()
import 'dotenv'
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/note', notesRoutes)
app.use('/user', userRoutes)
const PORT = process.env.PORT || 3300;
const ATLAS_URI = process.env.ATLAS_URI || "mongodb+srv://Narmadha:Secure321@cluster0.s40ur.mongodb.net/learningmatters?retryWrites=true&w=majority";
mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch(e => console.log("CustomError", e.message))

