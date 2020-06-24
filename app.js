const express = require('express');
const app=new express;

const nav=[
    {
        link:'/',name:'HOME'
    },
    {
        link:'/login',name:'LOGIN'
    },
    {
        link:'/signup',name:'SIGNUP'
    },
    {
        link:'/books',name:'BOOKS'
    },
    {
        link:'/authors',name:'AUTHOR'
    }
   

];


const loginRouter=require('./src/routes/loginroutes')(nav)
const signupRouter=require('./src/routes/signuproutes')(nav)
const authorsRouter=require('./src/routes/authorroutes')(nav)

 const booksRouter=require('./src/routes/booksroutes')(nav)
 


app.use(express.static('./public'));//to link the custom css file
//app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/author',authorsRouter);
//app.use('/book',brouter);


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Libraray Management App',
      
    });
});


app.listen(5000);