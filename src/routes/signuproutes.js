
const express=require('express');

const signupRouter = express.Router();
const Signupdata=require('../model/signupdata');

function router(nav){
    signupRouter.get('/',function(req,res){
    Signupdata.find()
    .then(function(signUp){
        res.render("signup",{

            nav,
            title:'Libraray Management App',
            signUp
        });
     });

    });   

signupRouter.post('/',function(req,res){
    var item={
    fname:req.body.fname,
    lname:req.body.lname,
    email:req.body.email,
    age:req.body.age,
    phone:req.body.phone,
    adress:req.body.adress,
    country:req.body.country,
    password:req.body.password
    }
    var signUp=Signupdata(item);
    alert("signed up sucess");
    signUp.save();
    res.redirect('/');
});
return signupRouter;
}

module.exports = router;