// require mongoose
const mongoose=require('mongoose');

// connect to database
mongoose.connect('mongodb://localhost/todo_list_db');

// acquiring the connection
const db=mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to the database'));

// up and running
db.once('open',function(){
    console.log('Successfully connected to database');
})