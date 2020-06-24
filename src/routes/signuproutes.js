
const express=require('express');
const signupRouter = express.Router();
function router(nav){


    
    
    signupRouter.get('/',function(req,res){
    
        res.render("signup",
        {   nav,
            title:'Libraray Management App',
         
          
        });
    });
        // booksRouter.get('/single',function(req,res){
        //     res.send("hai i am a single book");
        // });
   
    return signupRouter;
}



module.exports = router;