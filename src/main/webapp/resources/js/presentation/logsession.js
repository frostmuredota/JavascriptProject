var initsession = function () {
    var usernamelength = document.getElementById("username").value.length;
    var passwordlength = document.getElementById("password").value.length;
    var MESSAGEUSER = "Please complete the field username";
    var MESSAGEVALIDPASSWORD = "Please the password between 6 and 8 characters";
    if (isEmpty(usernamelength)) {
        document.getElementById("message").innerHTML=MESSAGEUSER;
        return false;
    }
    if (!isCorrectPasswordLength(passwordlength)) {
        document.getElementById("message").innerHTML=MESSAGEVALIDPASSWORD;
        return false;
    }
    return true;
};