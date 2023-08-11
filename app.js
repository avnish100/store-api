require('dotenv').config()
require('express-async-errors')


const express = require('express');
const app = express();

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware

app.use(express.json())

//route 
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>')

})

app.use('/api/v1/products',productsRouter)
//product route

app.use(notFoundMiddleware)
app.use(errorMiddleware)
const port = process.env.PORT || 3000
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log("Server started on port 3000"))
    }
    catch(error){
        console.log(error)

    }
}

start()