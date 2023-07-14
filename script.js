
    function validationForm(){
          let x=document.forms["myform"]["name"].value;
          if(x==""){
            alert("User Name must be filled out!!");
            return false;
          }
          let y=document.forms["myform"]["email"].value;
          if(y==""){
            alert("Email address must be filled out!!");
            return false;
          }
          let z=document.forms["myform"]["pwd"].value;
          if(z==""){
            alert("Password must be filled out!!");
            return false;
          }
    }
