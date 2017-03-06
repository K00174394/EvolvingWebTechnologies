function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    var y= document.forms["myForm"]["lastname"].value;
    var z= document.forms["myForm"]["emailaddress"].value;
    var a= document.forms["myForm"]["psw"].value;
    var b= document.forms["myForm"]["retypepsw"].value;
    
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    
    
    if (y == "") {
        alert("Last Name must be filled out");
        return false;
    }
    
    if (z == "") {
        alert("Email Address must be filled out");
        return false;
    }
    
       var atpos = z.indexOf("@");
    var dotpos = z.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    
    
    if (a == "") {
        alert("Password must be filled out");
        return false;
    }
    
 
    if (a == "") {
        alert("Password must be filled out");
        return false;
    }
    
     if (b == "") {
        alert("Retype Password must be filled out");
        return false;
    }
    

        if(a.value == b.value){
        alert("Passwords Match!");
    }
    else{
        alert("Passwords Do Not Match!");
        
    
}
}
 
