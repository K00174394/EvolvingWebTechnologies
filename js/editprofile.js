function validateForm() {
    
    var x = document.forms["edit"]["firstname"].value;
    var y= document.forms["edit"]["lastname"].value;
    var z= document.forms["edit"]["emailaddress"].value;
    var a= document.forms["edit"]["website"].value;
    
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
        alert("Website must be filled out");
        return false;
    }
    
     
    
    
}