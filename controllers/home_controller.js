// handling the get request
module.exports.homeGet=function(req,res){
    return res.render('home',{
        title:'TODO APP',
        // to_do_list:todoList,
    });
}