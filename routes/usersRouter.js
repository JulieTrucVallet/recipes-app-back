import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, getUserByID, updateUser } from '../controllers/userController.js'
import { VerifyUserFields } from '../middlewares/verifyUserFields.js'

const usersRouter = Router()

usersRouter.get('/users', getAllUsers)
usersRouter.get('/users/:id', getUserByID)

usersRouter.post('/users', VerifyUserFields, createUser)

usersRouter.put('/users/:id', updateUser)

usersRouter.delete('/users/:id', deleteUser)

export default usersRouter