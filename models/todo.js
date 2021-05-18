const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:false
    },
    category:{
        type:String,
        required:true
    }
})

const Todo=mongoose.model('Todo',todoSchema);

module.exports=Todo;