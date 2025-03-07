import 'dotenv/config'
import express from "express"
import connectDB from "./client/db.js"
import authRouter from './routes/authRouter.js'
import recipeRouter from "./routes/recipesRouter.js"
import usersRouter from './routes/usersRouter.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', usersRouter, recipeRouter, authRouter)

app.get('/', (req, res) => {
    res.end('Test')
})

connectDB();
app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})