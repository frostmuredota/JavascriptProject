describe("Valid input username", function() {
    it("When username is not Empty", function() {
        var name = "Ramon";
         var message = "Please complete the field username";
        expect(isEmpty(name,message)).toBeFalsy();
    });
    it("When username is Empty", function() {
        var name = "".length;
         var message = "Please complete the field username";
        expect(isEmpty(name,message)).toBeTruthy();
    });
});
describe("Valid input password", function() {
    it("When password is empty", function() {
        var password = "";
        var passwordlength = password.length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeFalsy();
    });
    it("When password not empty and length is not correct", function() {
        var password = "1234";
        var passwordlength = password.length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeFalsy();

    });
    it("When password not empty and length is correct", function() {
        var password = "123456";
        var passwordlength = password.length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeTruthy();
    });
});