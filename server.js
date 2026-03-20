require('dotenv').config();

const express= require('express')
const router = require('./routes/blogRoutes')

require('./db'); 

const app= express();

const port = process.env.PORT || 5000;

app.use(express.json())

//custom middleware
app.use((req,res,next)=>{
    const time= new Date().toLocaleTimeString()

    console.log(`[${req.method}] ${req.path} - ${time}`)

    next();
})

app.use(router)

app.get('/',(req,res)=>{
    res.json({
        message: "Server Working..."
    })
    
})


app.listen(port,()=>console.log(`Server is running on port:${port}`))