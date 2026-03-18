const express = require('express');
const User = require('./models/User')

const app = express()
app.use(express.json());

const port = 5000;

app.listen(port, ()=>console.log(`Server started at Port: ${port}`))