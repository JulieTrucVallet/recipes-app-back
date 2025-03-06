import User from '../models/user.js'

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        if(users.length < 1){
            return res.status(400).json({message : 'Users not found'})
        }
        return res.status(200).json(users)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message: 'Internal server error'})
    }
}

export const getUserByID = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findById(id)
        return res.status(200).json(userByID)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message: 'Internal server error'})
    }
}

export const createUser = async (req, res) => {
    try{
        const newUser = await User.create(req.body)
        return res.status(201).json(newUser)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message : 'Internal server error'})
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params
    try{
        const userByID = await User.findByIdAndUpdate(id, req.body, {new : true})
        return res.status(201).json(userByID)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message : 'Internal server error'})
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params
    try{
        const deletedUser = await User.findByIdAndDelete(id)
        if(deletedUser){
            return res.status(204).json('User has been deleted')
        }
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message : 'Internal server error'})
    }
}