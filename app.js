const express = require('express');
var bodyParser=require('body-parser');
const app=express();

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
        link:'/books',name:'BOOKS '
    },
    {
        link:'/authors',name:'AUTHORS'
    }
   

];


const loginRouter=require('./src/routes/loginroutes')(nav)
const signupRouter=require('./src/routes/signuproutes')(nav)
const authorsRouter=require('./src/routes/authorroutes')(nav)
const adminRouter=require('./src/routes/adminroutes')(nav)
 const booksRouter=require("./src/routes/bookroutes")(nav)
 

app.use(bodyParser.json());
app.use(express.static('./public'));//to link the custom css file
//app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);


app.get('/',function(req,res){
    res.render('index',
    {
        nav,
        title:'Libraray Management App',
      
    });
});


app.listen(3000);