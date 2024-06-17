function validateform(){
    var name = document.myform.name.value;
    var comments = document.myform.comments.value;

    if(name==null|| name==""){
    alert("Name can't be blank");
    return false;
    }
   else if(name==null || name==""){
    alert("comments can't be blank");
    return false;
   }
}