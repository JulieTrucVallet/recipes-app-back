import 'dotenv/config';
import express from "express";
import connectDB from "./client/db.js";
import usersRouter from './routes/usersRouter.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api', usersRouter)

app.get('/', (req, res) => {
    res.end('Test')
})

connectDB();
app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})