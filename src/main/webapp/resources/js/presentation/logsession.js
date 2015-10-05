var initsession = function () {
    var usernamelength = document.getElementById("username").value.length;
    var passwordlength = document.getElementById("password").value.length;
    var MESSAGEUSER = "Please complete the field username";
    var MESSAGEVALIDPASSWORD = "Please the password between 6 and 8 characters";
    if (isEmpty(usernamelength,MESSAGEUSER)) {
        confirm(getListMessages());
        return false;
    }
    if (!isCorrectPasswordLength(passwordlength,MESSAGEVALIDPASSWORD)) {
        confirm(getListMessages());
        return false;
    }
    return true;
};