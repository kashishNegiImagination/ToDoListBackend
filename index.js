const express = require('express');
const app=express();

//load config from env
require('dotenv').config();
const PORT= process.env.PORT || 3000;

//middle ware to parse json req body
app.use(express.json());

//import routes for todo API
const todoRoutes= require('./routes/todos');
//mount the todo API routes
app.use('/api/v1',todoRoutes);


app.listen(PORT, ()=>{
    console.log(`server started successfully at ${PORT}`)
})

//connect to the database
const dbConnect= require('./config/database');
dbConnect();

//default router
app.get('/',(req,res)=>{
    res.send(`<h1>This is homepage</h1>`);
})