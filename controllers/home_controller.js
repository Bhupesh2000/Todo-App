// Sending temporary list from the server
var todoList=[
    {
        todo:'Complete my website',
        date:'May 15,2021',
        category:'School'
    },
    {
        todo:'Go to market',
        date:'May 13,2021',
        category:'Cleaning'
    },
    {
        todo:'Add a work',
        date:'No deadline',
        category:'Personal'
    },
    {
        todo:'Complete my website',
        date:'May 15,2021',
        category:'Other'
    },
    {
        todo:'Go to market',
        date:'May 13,2021',
        category:'Work'
    }
]

// handling the get request
module.exports.homeGet=function(req,res){
    return res.render('home',{
        title:'TODO APP',
        to_do_list:todoList,
    });
}