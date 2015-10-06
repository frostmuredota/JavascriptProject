    function isCorrectPasswordLength(element) {
        var minlength = 6;
        var maxlength = 8;
        return element >= minlength && element <= maxlength;
    };
    function isValidEmail(element) {
        var regex = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        return element.match(regex);
    };
    function genderSelected(element) {
        var selectedGender = null;
        for (var i = 0; i < element.length; i++) {
            if (element[i].checked === true) {
                selectedGender = element[i].value;
            }
        }
        return selectedGender===null;
    };
    var isEmpty = function(element){
        return element===0;
    };
    var disableLabel = function(){
       document.getElementById("message").innerHTML="";
    };