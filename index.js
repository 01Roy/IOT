const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

require('dotenv/config')
let PORT = process.env.PORT || 3000;

// MIDDLE WARE
app.use(express.json())
app.use(cors('*'))


// Routers
const userRouter = require('./Routes/user')
app.use('/user', userRouter)


// Database Connection
mongoose.connect(process.env.CONNECION_STRING, { dbName: "IOTDB" }).then((res) => {
    console.log("DB is ready to use...")
})
    .catch(e => {
        console.log(e.message)
    })


app.listen(PORT, () => {
    console.log(`Server is Runnning on PORT ${PORT}`)
})