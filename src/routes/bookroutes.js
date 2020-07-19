const express = require('express');

const booksRouter=express.Router();


const Bookdata = require('../model/Bookdata');



function router(nav){

// var books=[
//     {
//         title:'AADUJEEVITHAM',
//         author:'Benyamin',
//         catogory:'novel',
//         img:"../images/aadujeevitham.jpg"
//     },
//     {
//         title:'PATHUMMAYUDE AADU',
//         author:'Basheer',
//         catogory:'Novel',
//         img:"../images/basheer.jpg"
//     },
//     {
//         title:'THE RAIN',
//         author:'KamalaSurayya',
//         catogory:'Poem',
//         img:"../images/kamalasurayya.jpg"
//     }

// ]

booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render('books',
        {  
             nav,
            title:'Libraray Management App',
         
            books
        });
    
    })
  });

booksRouter.get('/:id',function(req,res){
    const id= req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            title:'Libraray Management App',
           nav,
           // book:books[id]
            book
        });
    })
    });
    



 return booksRouter;
}
module.exports = router;
