    var getMessages = function(){
    var namelength = document.getElementById("name").value.length;
    var lnamelength = document.getElementById("lastn").value.length;
    var usernamelength = document.getElementById("username").value.length;
    var passwordlength = document.getElementById("password").value.length;
    var listgender = document.getElementsByName("gender");
    var messages=[];
    var arrays=[["Please complete the field name",isEmpty(namelength)],
    ["Please complete the field lastname",isEmpty(lnamelength)],
    ["Please complete the field username",isEmpty(usernamelength)],
    ["Please select a Sex",!genderSelected(listgender)],
    ["Please use a valid email",!isValidEmail(document.getElementById("email").value)],
    ["Please the password between 6 and 8 characters",!isCorrectPasswordLength(passwordlength)]];
    //COMPROBE IF THE FIELDS OF THE FORM ARE EMPTYS

    for (var i = 0 ; i<arrays.length; i++) {
        if(arrays[i][1]===true){
          messages.push(arrays[i][0]);
        }
    }

    return messages;
};

$(document).ready(function () {
    $("#submit").click(function(){
    var messages = getMessages();
    var namelength = document.getElementById("name").value.length;
    var lnamelength = document.getElementById("lastn").value.length;
    var usernamelength = document.getElementById("username").value.length;
    var passwordlength = document.getElementById("password").value.length;
    var listgender = document.getElementsByName("gender");
    var validationEmpty=isEmpty(namelength) ||
                        isEmpty(lnamelength)||
                        isEmpty(usernamelength);
    var validations = validationEmpty||
                      !genderSelected(listgender)||
                      !isValidEmail(document.getElementById("email").value)||
                      !isCorrectPasswordLength(passwordlength);
    if(validations){
      $("#register").submit(function(event){
        document.getElementById("message").innerHTML=messages;
        event.preventDefault();
      });
    }else{
       window.location="welcome.html";
    }
    });
});