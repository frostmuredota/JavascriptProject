$(document).ready(function () {
    $("#submit").click(function(){
    var namelength = document.getElementById("name").value.length;
    var lnamelength = document.getElementById("lastn").value.length;
    var usernamelength = document.getElementById("username").value.length;
    var passwordlength = document.getElementById("password").value.length;
    var listgender = document.getElementsByName("gender");
    // MESSAGES TO SHOW
    var MESSAGENAME = "Please complete the field name";
    var MESSAGELNAME = "Please complete the field lastname";
    var MESSAGEUSER = "Please complete the field username";
    var MESSAGEGENDER = "Please select a Sex";
    var MESSAGEVALIDEMAIL = "Please use a valid email";
    var MESSAGEVALIDPASSWORD = "Please the password between 6 and 8 characters";
    var validationEmpty=isEmpty(namelength,MESSAGENAME) ||
                        isEmpty(lnamelength,MESSAGELNAME)||
                        isEmpty(usernamelength,MESSAGEUSER);
    var validations = validationEmpty||
                      !genderSelected(listgender,MESSAGEGENDER)||
                      !isValidEmail(document.getElementById("email").value,MESSAGEVALIDEMAIL)||
                      !isCorrectPasswordLength(passwordlength,MESSAGEVALIDPASSWORD);
    if(validations){
      $("#register").submit(function(event){
        confirm(getListMessages());
        event.preventDefault();
      });
    }else{
       window.location="welcome.html";
    }
    });
});