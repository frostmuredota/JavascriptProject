    var listmessages = [];
    function isCorrectPasswordLength(element,message) {
        var minlength = 6;
        var maxlength = 8;
        sendMessage(message);
        if(element >= minlength && element <= maxlength){
           return true;
        }else{
          return false;
        }
    };
    function isValidEmail(element,message) {
        var regex = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        sendMessage(message);
        if(element.match(regex)){
            return true;
        }else{
            return false;
        }
    };
    function genderSelected(element,message) {
        var selectedGender = null;
        sendMessage(message);
        for (var i = 0; i < element.length; i++) {
            if (element[i].checked === true) {
                selectedGender = element[i].value;
            }
        }
        if(selectedGender===null){
           return false;
        }else{
          return true;
        }
    };
    var isEmpty = function(element,message){
        sendMessage(message);
        if(element===0){
            return true;
        }else{
            return false;
        }
    };
    var sendMessage = function(message){
      listmessages=[];
      listmessages= [message];
    };
    var getListMessages = function(){
    return listmessages;
    };