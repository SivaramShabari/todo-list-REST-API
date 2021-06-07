import express from 'express'
const router = express.Router()

import { getUsers, createUser, deleteUser, updateUser } from '../controller/users.js'
router.get('/:uid', getUsers)
router.post('/', createUser)
router.delete('/:id', deleteUser);
router.put('/:id', updateUser)


export default router