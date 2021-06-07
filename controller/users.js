import Users from '../models/user-model.js'

export const getUsers = async (req, res) => {
    try {
        const post = await Users.find({ uid: req.params.uid })
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}
export const createUser = async (req, res) => {
    const User = req.body;
    const newUsers = new Users(User);
    try {
        await newUsers.save()
        res.status(201).json(newUsers)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteUser = (req, res) => {
    Users.remove({ _id: req.params.id })
        .then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))
}

export const updateUser = async (req, res) => {
    Users.findById({ _id: req.params.id })
        .updateOne(req.body)
        .then(re => res.json({ _Id: req.params.id, re }))
        .catch(err => res.status(409).json({ message: err.message }))
}
