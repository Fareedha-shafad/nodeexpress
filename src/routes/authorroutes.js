
const express=require('express');
const authorsRouter = express.Router();
function router(nav){


    var authors = [
        {
                title:'AADUJEEVITHAM',
                author:'Benyamin',
              //  catogory:'novel',
                img:"../images/OIP (3).jpg"
            },
            {
               title:'PATHUMMAYUDE AADU',
                author:'Basheer',
               // catogory:'Novel',
                img:"../images/basheer.jpg"
            },
            {
                title:'THE RAIN',
                author:'KamalaSurayya',
               // catogory:'Poem',
                img:"../images/kamalasurayya.jpg"
            }
        
        ]
        
    
    
    authorsRouter.get('/',function(req,res){
    
        res.render('authors',
            {
                nav,
                title:'Libraray Management App',
                authors
            });
        
        });
    
        // booksRouter.get('/single',function(req,res){
        //     res.send("hai i am a single book");
        // });
    authorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('author',{
            title:'Libraray Management App',
            nav,
            author:authors[id]
        })
    })
    return authorsRouter;
}



module.exports = router;