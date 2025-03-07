import bcrypt from 'bcryptjs'
import { Router } from 'express'
import { VerifyUserFields } from '../middlewares/verifyUserFields.js'
import User from '../models/user.js'

const authRouter = Router()

authRouter.post('./register', VerifyUserFields, async (req, res) => {
    const {first_name, last_name, email, password} = req.body
    // We destructure the inputs from the user
    try{
        // We verify that the user doesnt exist in the DB
        const emailVerification = await User.findOne({email})
        if(emailVerification){
            return res.status(409).json(`Email already token`)
        }

        // We generate a salt (random data added to the password for more complexity)
        const salt = await bcrypt.genSalt(10)
        // We hash the password coming from the user and adding the salt
        const hashedPasseword = await bcrypt.hash(password, salt)

        // We created a new user, by giving the hashedpassword as password
        const newUser = await new User({
            first_name,
            last_name,
            email,
            password : hashedPasseword
        })
        
        await newUser.save()
        return res.status(201).json(`Welcome ${first_name}`)
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message : 'Internal server error'})
    }
})

export default authRouter