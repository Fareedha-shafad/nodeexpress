const express = require('express');
const app=express();

const loginrouter=express.Router();
const signuprouter=express.Router();
const authorrouter=express.Router();

 
 const booksrouter=require('./src/routes/bookroutes');
 //const authorrouter=require('.src/routes/authorroutes');

app.use(express.static('./public'));//to link the custom css file
//app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginrouter);
app.use('/signup',signuprouter);
app.use('/books',booksrouter);
app.use('/author',authorrouter);
// app.use('/book',brouter);


app.get('/',function(req,res){
    res.render('index',
    {
        title:'Libraray Management App',
        nav:[   {link:'/',name:'HOME'},
                {link:'/login/',name:'LOGIN'},
                {link:'/signup/',name:'SIGNUP'},
                {link:'/books/',name:'BOOKS'},
                {link:'/author/',name:'AUTHOR'}

            ]
    });
});



signuprouter.get('/',function(req,res){
    res.render('signup',
    {
        title:'Libraray Management App',
        nav:[   {link:'/',name:'HOME'},
                {link:'/login/',name:'LOGIN'},
                {link:'/signup/',name:'SIGNUP'},
                {link:'/books/',name:'BOOKS'},
                {link:'/author/',name:'AUTHOR'}

            ]
    });
});

loginrouter.get('/',function(req,res){
    res.render('login',
    {
        title:'Libraray Management App',
        nav:[   {link:'/',name:'HOME'},
                {link:'/login/',name:'LOGIN'},
                {link:'/signup/',name:'SIGNUP'},
                {link:'/books/',name:'BOOKS'},
                {link:'/author/',name:'AUTHOR'}

            ]
    });
});



// brouter.get('/',function(req,res){
//     res.render('book',
//     {
//         title:'Libraray Management App',
//         nav:[   {link:'./',name:'HOME'},
//                 {link:'./login/',name:'LOGIN'},
//                 {link:'./signup/',name:'SIGNUP'},
//                 {link:'./books/',name:'BOOKS'},
//                 {link:'./author/',name:'AUTHOR'}

//             ]
//     });
// });


authorrouter.get('/',function(req,res){
        res.render('author',
        {
            title:'Libraray Management App',
            nav:[   {link:'./',name:'HOME'},
                    {link:'./login/',name:'LOGIN'},
                    {link:'./signup/',name:'SIGNUP'},
                    {link:'./books/',name:'BOOKS'},
                    {link:'./author/',name:'AUTHOR'}
    
                ]
        });
    });


app.listen(3000);