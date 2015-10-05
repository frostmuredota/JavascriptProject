describe("Valid input name", function() {
    it("When name is not Empty", function() {
        var namelength = "Ramon".length;
        var message = "Please complete the field name";
        expect(isEmpty(namelength,message)).toBeFalsy();
    });
    it("When name is Empty", function() {
        var namelength = "".length;
        var message = "Please complete the field name";
        expect(isEmpty(namelength,message)).toBeTruthy();
    });
});

describe("Valid input Last name", function() {
    it("When Last name is not Empty", function() {
        var lastnamelength = "Duran".length;
        var message = "Please complete the field last name";
        expect(isEmpty(lastnamelength,message)).toBeFalsy();
    });
    it("When Last name is Empty", function() {
        var lastnamelength = "".length;
        var message = "Please complete the field last name";
        expect(isEmpty(lastnamelength,message)).toBeTruthy();
    });
});
describe("Valid input username", function() {
    it("When username is not Empty", function() {
        var usernamelength = "user123".length;
        var message = "Please complete the field username";
        expect(isEmpty(usernamelength,message)).toBeFalsy();
    });
    it("When username is Empty", function() {
        var usernamelength = "".length;
        var message = "Please complete the field username";
        expect(isEmpty(usernamelength,message)).toBeTruthy();
    });
});

describe("Valid radiobutton sex",function() {
            beforeEach(function() {
                setFixtures('<td><input type="radio" id="male" value="M" name="gender" checked/>Male'
                        + '<input type="radio" id="female" value="F" name="gender"/>Female</td>');
            });
            it("When radiobutton is checked", function() {
                var listgender = $("input:radio[name='gender']");
                var message = "Please select a sex";
                expect(genderSelected(listgender,message)).not.toBeNull();
            });

        });

describe("Valid input password", function() {
    it("When password is empty", function() {
        var passwordlength = "".length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeFalsy();
    });
    it("When password not empty and length is not correct", function() {
        var passwordlength = "1234".length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeFalsy();

    });

    it("When password not empty and length is correct", function() {
        var password = "1234567";
        var passwordlength = password.length;
        var message = "Please the password between 6 and 8 characters";
        expect(isCorrectPasswordLength(passwordlength,message)).toBeTruthy();
    });

});
describe("Valid input email", function() {
    it("When email is empty", function() {
        var email = "".length;
        var message = "Please use a valid email";
        expect(isEmpty(email,message)).toBeTruthy();
    });
    it("When is a invalid email", function() {
        var email = "ramon.com";
        var message = "Please use a valid email";
        expect(isValidEmail(email,message)).toBeFalsy();
    });
    it("When is a valid email", function() {
        var email = "ramon@gmail.com";
        var message = "Please use a valid email";
        expect(isValidEmail(email,message)).toBeTruthy();

    });

});