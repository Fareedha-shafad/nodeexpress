const express = require('express');

const  adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const Authorsdata = require('../model/Authordata');




function router(nav){
    adminRouter.get('/delete/:id',function(req,res){
        const   id=req.params.id;
        Bookdata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/books');
        })
    })
    

    adminRouter.get('/deleteauthor/:id',function(req,res){
        const   id=req.params.id;
        Authorsdata.deleteOne({_id:id})
        .then(()=>{
            res.redirect('/authors');
        })
    })
    
    // adminRouter.get('/update/:id',function(req,res){
    //     const id=req.params.id;
    //     Bookdata.findOne({_id:id})
    //     .then(function(book){
    //         res.render('update',{
    //             title:'Libraray Management App',
    //            nav,
               
    //             book
    //         })
    //     })
    // })
    
    // adminRouter.post('/update/:id',function(req,res){
    //     const id=req.params.id;
    //     Bookdata.updateOne({_id:id},{
    //         title:req.body.title,
    //         author:req.body.author,
    //         catogory:req.body.catogory,
    //         img:req.file.filename
    //     }).then(()=>{
    //         res.redirect('/books')
    //     })
    // })


    return adminRouter;
}
 module.exports=router;