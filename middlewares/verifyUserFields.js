

export const VerifyUserFields = (req, res, next) => {
    try{
        const { first_name, last_name, email, password} = req.body
        if (!first_name || !last_name || !email || !password) {
            return res.json('All fields are required coming from the middleware')
        }
        next()
    }
    catch(err){
        console.log(err)
        return res.status(400).json({message: 'Internal server error'})
    }
}

// J'accepte à la route localhost:3000/api/users en faisant un POST
// Je passe d'abord par le middleware VerifyUserFields, qui vérifie que tous les champs sont donnés