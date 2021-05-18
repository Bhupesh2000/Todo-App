// Setup the express server
const express=require('express');
const app=express();
const port=8001;

// require mongoose
const db=require('./config/mongoose');
const Todo=require('./models/todo');

// Set up ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());

// linking static files
app.use(express.static('assets'));

// Setup the routes page
app.use('/',require('./routes/index'));


// app to listen the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})