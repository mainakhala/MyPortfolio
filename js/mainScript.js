function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
$(document).ready(function() {

    //validation
$("#contactUs").validate({
    rules:{
        fname : "required",
        email : {
            required : true,
            email: true, 
                }
    }, 
    messages :{
        fname :{
            required : "Full name is required"
            },
        email: {
            required: "Email Address is required",
            email: "Email address has to be valid e.g., example@example.com"
            }
    },
    
    errorPlacement : function (error, element) { 
        if ( element.is (":radio") || element.is(":checkbox") ){
            error.appendTo(element.parent ());
        }else{
            error.insertAfter(element);
        }
     }
});

});

