// Setup the express server
const express=require('express');
const app=express();
const port=8001;

// Setup the routes page
app.use('/',require('./routes/index'));

// Set up ejs as view engine
app.set('view engine','ejs');
app.set('views','./views');

// linking static files
app.use(express.static('assets'));

// app to listen the port
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})