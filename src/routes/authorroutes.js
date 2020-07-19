
const express=require('express');

const authorsRouter = express.Router();

const Authordata=require('../model/Authordata');
function router(nav){


    // var authors = [
    //     {
    //             title:'AADUJEEVITHAM',
    //             author:'Benyamin',
    //           //  catogory:'novel',
    //             img:"../images/OIP (3).jpg"
    //         },
    //         {
    //            title:'PATHUMMAYUDE AADU',
    //             author:'Basheer',
    //            // catogory:'Novel',
    //             img:"../images/basheer.jpg"
    //         },
    //         {
    //             title:'THE RAIN',
    //             author:'KamalaSurayya',
    //            // catogory:'Poem',
    //             img:"../images/kamalasurayya.jpg"
    //         }
        
    //     ]
        
    
    
    authorsRouter.get('/',function(req,res){
    Authordata.find()
   .then(function(authors){
        res.render("authors",
        {
            nav,
            title:'Libraray Management App',
            authors
        });

    });
       
        
  });
    
        
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){

            res.render('author',{
                title:'Libraray Management App',
                nav,
                author
        })
       
        })
    })
    return authorsRouter;
}



module.exports = router;