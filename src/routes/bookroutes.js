const express = require('express');

const booksrouter=express.Router();
var books=[
    {
        title:'AADUJEEVITHAM',
        author:'Benyamin',
        catogory:'novel',
        img:"../images/aadujeevitham.jpg"
    },
    {
        title:'PATHUMMAYUDE AADU',
        author:'Basheer',
        catogory:'Novel',
        img:"../images/basheer.jpg"
    },
    {
        title:'THE RAIN',
        author:'KamalaSurayya',
        catogory:'Poem',
        img:"../images/kamalasurayya.jpg"
    }

];

booksrouter.get('/',function(req,res){
    res.render('books',
    {
        title:'Libraray Management App',
        nav:[   {link:'/',name:'HOME'},
                {link:'/login/',name:'LOGIN'},
                {link:'/signup/',name:'SIGNUP'},
                {link:'/books/',name:'BOOKS'},
                {link:'/author/',name:'AUTHOR'}
       
            ],
        books
    });
})

booksrouter.get('/:id',function(req,res){
    const id= req.params.id
     res.render('book',{
         title:'Libraray Management App',
         nav:[   {link:'./',name:'HOME'},
                 {link:'./login/',name:'LOGIN'},
                 {link:'./signup/',name:'SIGNUP'},
                 {link:'./books/',name:'BOOKS'},
                 {link:'./author/',name:'AUTHOR'}
 
             ],
             book:books[id]
 
     })
 })
// booksrouter.route('/:id').get((req,res) => {
//     const i=req.params.id;
//     res.render('book.ejs',
//     {
//         title:'Libraray Management App',
//          nav:[   {link:'./',name:'HOME'},
//                  {link:'./login/',name:'LOGIN'},
//                  {link:'./signup/',name:'SIGNUP'},
//                  {link:'./books/',name:'BOOKS'},
//                  {link:'./author/',name:'AUTHOR'}
 
//              ],
//              book:books[i]
//     });
// });
 module.exports=booksrouter;