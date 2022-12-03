function textBoxValidation() {
    if(document.getElementById('txtBox').value.trim()=="") {
        alert('Textbox should not be blank');
        txtBox.focus();
        return false;
    }
}

function emailValidation() {
    var emailIdValue=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,})(.[a-z]{2,})?$/;
    if(document.getElementById('txtEmail').value.match(emailIdValue)) {
        alert("Email Validation Successful");
        return true;
    }
    else {
        alert("Give a proper email id");
        txtEmail.focus();
        return false;
    }
}

function letterValidation() {
    var letterValue=/^[a-zA-Z]+$/;
    if(document.getElementById('txtLetter').value.match(letterValue)) {
        alert("Only letters entered");
        return true;
    }
    else {
        alert("Please Enter Letters Only");
        txtletter.focus();
        return false;
    }
}

function numberValidation() {
    var numbers=/^[0-9]+$/;
    if(document.getElementById('txtNumber').value.match(numbers)) {
        alert("Only Numbers Entered");
        return true;
    }
    else {
        alert("Please Enter Numbers Only");
        txtNumber.focus();
        return false;
    }
}

function letterAndNumberValidation() {
    var letterAndNumberValue=/^[0-9a-zA-Z]+$/;
    if(document.getElementById('txtLettersAndNumbers').value.match(letterAndNumberValue)) {
        alert("No Special Characters Inserted");
        return true;
    }
    else {
        alert("Please Enter Letters and Numbers Only");
        txtLettersAndNumbers.focus();
        return false;
    }
}

function ipAddressValidation()
{
    var ipAddressPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if(document.getElementById('txtip').value.match(ipAddressPattern))
    {
        alert("Yes you enter corrent IP address.");
        return true;
    }
    else
    {
        alert('IP Address Validation Failed');
        txtletter.focus();
        return false;
    }
}