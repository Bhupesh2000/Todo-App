const Todo=require('../models/todo');

// Sending temporary list from the server
var todoList=[
    {
        description:'Complete my website',
        date:'May 15,2021',
        category:'School'
    },
    {
        description:'Go to market',
        date:'May 13,2021',
        category:'Cleaning'
    },
    {
        description:'Add a work',
        date:'No deadline',
        category:'Personal'
    },
    {
        description:'Complete my website',
        date:'May 15,2021',
        category:'Other'
    },
    {
        description:'Go to market',
        date:'May 13,2021',
        category:'Work'
    }
]

// handling the get request
module.exports.homeGet=function(req,res){
    // return res.render('home',{
    //     title:'TODO APP',
    //     // to_do_list:todoList,
    // });
    Todo.find({},function(err,todo){
        if(err){
            console.log('Error in fetching contacts from database');
            return;
        }
        return res.render('home',{
            title:"My Contact List",
            to_do_list:todo,
        })
    })
}

// handling the post request
module.exports.homePost=function(req,res){
    // todoList.push({
    //     description:req.body.description,
    //     date:req.body.date,
    //     category:req.body.category
    // })
    // res.redirect('back');
    Todo.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTodo){
        if(err){
            console.log('Error');
            return;
        }
        console.log('******','new work added');
        res.redirect('back');
    })
}