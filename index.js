const express=require('.express');
const app=express();
const port=8001;


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
})