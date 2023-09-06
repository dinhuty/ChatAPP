const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require('./config/database');
const route = require('./routes');
require('dotenv').config();

connectDB()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send("Hello world")
})

route(app)

const port = process.env.PORT_WEB || 3001
app.listen(port, () => {
    console.log(`Your running port ${port}`)
})