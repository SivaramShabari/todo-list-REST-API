import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    name: String,
    img:
    {
        type: String,
        default: "/img/default.jpg"
    },
    uid: String,
    email: String,
    createdAt: Date,
    isVerified:
    {
        type: Boolean,
        default: false
    }
})
const Users = mongoose.model('Users', usersSchema)
export default Users