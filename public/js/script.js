// LOGINFORM VALIDATION

// BUTTON SUBMIT
// function validationlogin() {
//     console.log("login form validation ");
   
//     var email = document.getElementById("email").value;
//     var pword = document.getElementById("password").value;
//     var lbl=document.getElementById("error");
//     // Regular Expression For Email
    // var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    // Conditions

  //   if ( email != '' && pword != '') 
  //   {
     
  //       if(email.match(emailReg))
  //       {
  //           if(pword.length>=8)
  //           {
              
  //             alert("CONGRATULATIONS..");
  //               return true;
  //           }
  //           else
  //           {
  //               lbl.innerText="ENTER A STRONG PASSWORD";
  //               lbl.style.color="brown";
  //               lbl.style.border="solid brown 3px";
                
  //               return false;
                
  //           }

  //       }
  //       else
  //       {
  //           lbl.innerText="ENTER A VALID EMAIL.";
  //           lbl.style.color="brown";
  //           lbl.style.border="solid brown 3px";
  //           return false;
  //       }

  //    }
  //   else
  //   {
  //       lbl.innerText="ALL FIELDS MUST BE FILLED";
  //       lbl.style.color="brown";
  //       lbl.style.border="solid brown 3px";
  //       return false;
  //   }
  // }
  function validationlogin()
  {
    console.log("login form validation ");
     
    var email = document.getElementById("email").value;
    var pword = document.getElementById("password").value;
   
    var err="";
    if(mail(email))
    {
    }
    if(pord(pword))
    {
  
    }
    return false;
  }
  function mail(email)
  {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var lbl=document.getElementsByClassName("error");
    if(email=="" ||email.match(emailReg))
    {
      err="";
      lbl[0].innerHTML=err;
      return  true;
    }
    else{
      err="CHECK YOUR EMAIL";
      lbl[0].innerHTML=err;
      return false;
  
    }
  }
  function pord(pword){
    var lbl=document.getElementsByClassName("error");
    if(pword=""||pword.length>=7)
    {
      err="";
      lbl[1].innerHTML=err;
      return true;
      }
      else{
        err="PASSWORD MUST BE VALID AND STRONG...!";
        lbl[1].innerHTML=err;
        return false;
      }
  }
  
  //LOGIN FORM VALIDATION ENDS
  //signup form validation
  function signupvalidation()
  {
  console.log("signup form validation ");
  var fname=document.getElementById("boxno1").value;
  var lname=document.getElementById("boxno2").value;
  var mail=document.getElementById("boxno3").value;
  var age=document.getElementById("boxno4").value;
  var phone=document.getElementById("boxno6").value;
  var addr=document.getElementById("boxno7").value;
  var country=document.getElementById("boxno8").value;
  var password=document.getElementById("boxno9").value;
  
  var text = "";
  
  if (FirstName(fname)) {
  }
  if (LastName(lname)) {
  }
  if (PhoneNumber(phone)) {
  }
  if (Age(age)){
  }
  
   if (Country(country)) {
  }
  if (Email(mail)) {
  }
  if (Password(password)) {
   }
  
  return false;
  }
  /*first name input validation*/
  function FirstName(fname) {
      var message = document.getElementsByClassName("error-message");
      var letters = /^[A-Za-z]+$/;
      if (fname =="" || fname.match(letters)) {
        text="";
        message[0].innerHTML = text;
        return true;
      }
      
      else {
        text="First name should contain only letters";
        message[0].innerHTML = text;
        return false;
      }
    }
    
    /*last name input validation*/
    function  LastName(lname) {
      var message = document.getElementsByClassName("error-message");
      var letters = /^[A-Za-z]+$/;
      if ( lname =="" || lname.match(letters)) {
        text="";
        message[1].innerHTML = text;
        return true;
      }
      
      else {
        text="Last name should contain only letters";
        message[1].innerHTML = text;
        return false;
      }
    }
    
    /*email address input validation*/
    function Email(mail) {
      console.log("mail validation")
      var message = document.getElementsByClassName("error-message");
      // /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      var atpos = mail.indexOf("@");
      var dotpos = mail.lastIndexOf(".");
      if(mail==""|| mail.match(mailformat))
      {
        text="";
        message[2].innerHTML = text;
        return true;
      }
      else{
        text="Wrong email format";
       message[2].innerHTML = text;
       return false;
      }
              
    }
     // validation age
     function Age(age){
      var message = document.getElementsByClassName("error-message");
      var  no = /^[0-9]+/;
      if ( (age=="" || (age.match(no)) && age>=1 && age<=100) ){
        text="";
        message[3].innerHTML = text;
        return true;
      }
      
      else {
        text="Age should be valid number";
        message[3].innerHTML = text;
        return false;
      }
    }
    
  //   phone number validation
    function  PhoneNumber(phone) {
      var message = document.getElementsByClassName("error-message");
      var numbers = /^[0-9]+$/;
      if ( phone =="" || phone.match(numbers)) {
        text="";
        message[4].innerHTML = text;
        return true;
      }
      
      else {
        text="Phone number should contain only numbers";
        message[4].innerHTML = text;
        return false;
      }
    }
    
  
  
    // country input validation
    function  Country(country) {
      var message = document.getElementsByClassName("error-message");
      var letters = /^[A-Za-z]+$/;
      if ( country =="" || country.match(letters)) {
        text="";
        message[5].innerHTML = text;
        return true;
      }
      
      else {
        text="Country name should contain only letters";
        message[5].innerHTML = text;
        return false;
      }
    }
    //  validate password
  function Password(password) {
      var message = document.getElementsByClassName("error-message");
      var illegalChars = /[\W_]/; // allow only letters and numbers
      // if (illegalChars.test(password)) { 
      //   text="Password contains illegal characters";
      //   message[6].innerHTML = text;
      //   return false;
      // }
      // else if ( (password.search(/[0-9]+/)==-1) ) {
      //   text="Password should contain at least one number";
      //   message[6].innerHTML = text;
      //   return false;
      // }
      // else  {
      //   text="";
      //   message[6].innerHTML = text;
      //   return true;
      // }
      if(password=="")
      {
  
      }
      else if(illegalChars.test(password))
      {
      text="Password contains illegal characters";
        message[6].innerHTML = text;
        return false;
      }
      else if ( (password.search(/[0-9]+/)==-1) ) {
        text="Password should contain at least one number";
        message[6].innerHTML = text;
        return false;
      }
      else  {
        text="";
        message[6].innerHTML = text;
        return true;
      }
    }
     
   
  