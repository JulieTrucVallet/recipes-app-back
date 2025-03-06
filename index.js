import 'dotenv/config';
import express from "express";
import connectDB from "./client/db.js";
import usersRouter from './routes/usersRouter.js';

const app = express()

app.use('/api', usersRouter)

connectDB();

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})