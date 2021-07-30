const express = require('express');
const app = express();
const todo = require('./routes/todo');
const connectDB = require('./db/connect')
const notFount = require('./middleware/not-found')
require('dotenv').config()

//middleware
app.use(express.json())
app.use(express.static('./public'))
app.use(notFount)
//route
app.use('/api/v1/todo', todo)

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()