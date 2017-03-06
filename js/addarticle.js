function validateForm() {
    var x = document.forms["add"]["title"].value;
    var y= document.forms["add"]["summary"].value;
    var z= document.forms["add"]["fulltxt"].value;
    var a= document.forms["add"]["author"].value;
    var b= document.forms["add"]["date"].value;
    
    if (x == "") {
        alert("Title must be filled out");
        return false;
    }
    
    
    if (y == "") {
        alert("Summary must be filled out");
        return false;
    }
    
    if (z == "") {
        alert("Full Text must be filled out");
        return false;
    }

    
    
    if (a == "") {
        alert("Author must be filled out");
        return false;
    }
    
    
     if (b == "") {
        alert("Date must be filled out");
        return false;
    }
    


}
 
function ConfirmDelete()
{
  var c = confirm("Are you sure you want to delete?");
  if (c)
      return true;
  else
    return false;
}