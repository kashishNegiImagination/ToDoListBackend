//import the module
const Todo = require('../models/Todo')

//define route handler

exports.deleteTodo = async(req,res)=>{
    try{
        const {id}= req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "todo Deleted by kashish negi"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: 'server error'
        }) 
    }
}
