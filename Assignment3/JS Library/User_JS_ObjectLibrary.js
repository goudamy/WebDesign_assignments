/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var obj;
function toJSONSTring() {
    var user = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var ssn = document.getElementById("ssn").value;
    var phone = document.getElementById("phone").value;
    var url = document.getElementById("url").value;
    var passwd = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var bday = document.getElementById("bday").value;
    var bday1 = document.getElementById("bday1").value;
    var credit = document.getElementById("credit").value;
    obj = {'User': user, 'Email': email, 'SSN': ssn, 'Phone': phone,
        'URL': url, 'Password': passwd, 'Password1': password1,
        'DOB': bday, 'DOB1': bday1, 'Credit': credit
    };
    alert("values are saved in json format");
    }
    function readFromJSONString() {

    document.getElementById("name").value = obj.User;
    document.getElementById("email").value = obj.Email;
    document.getElementById("ssn").value = obj.SSN;
    document.getElementById("phone").value = obj.Phone;
    document.getElementById("url").value = obj.URL;
    document.getElementById("password").value = obj.Password;
    document.getElementById("password1").value = obj.Password1;
    document.getElementById("bday").value = obj.DOB;
    document.getElementById("bday1").value = obj.DOB1;
    document.getElementById("credit").value = obj.Credit;
}

function isPhoneNumberFormatValid() {
    var phone = document.gform.phone.value;

    var pattern = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
    var phoneMatch = pattern.test(phone);
    alert(phoneMatch);
    if (phoneMatch == false) {
        alert("Phone Number is invalid");
    }
}

function isValidEmail() {

    var email = document.gform.email.value;
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");


    if (at < 2 || (dot < at + 1) || dot + 5 <= email.length) {
        alert("Invalid email-id");
    }
}
function saveToLocalStorage() {
    alert("here");
    var name = document.gform.name.value;
    var email = document.gform.email.value;
    var url = document.gform.url.value;
    var passwd = document.gform.password.value;
    var password1 = document.gform.password1.value;
    var bday = document.gform.bday.value;
    var bday1 = document.gform.bday1.value;
    var ssn = document.gform.ssn.value;
    var phone = document.gform.phone.value;
    var credit = document.gform.credit.value;

    localStorage.setItem("name", name);
    localStorage.setItem("password1", password1);
    localStorage.setItem("email", email);
    localStorage.setItem("url", url);
    localStorage.setItem("passwd", passwd);
    localStorage.setItem("bday", bday);
    localStorage.setItem("bday1", bday1);
    localStorage.setItem("ssn", ssn);
    localStorage.setItem("phone", phone);
    localStorage.setItem("credit", credit);
    alert("saved to local storage");
}
function saveToSessionStorage() {
    var name = document.gform.name.value;
    var email = document.gform.email.value;
    var passwd = document.gform.password.value;
    var bday = document.gform.bday.value;
    var url = document.gform.url.value;
    var bday1 = document.gform.bday1.value;
    var ssn = document.gform.ssn.value;
    var phone = document.gform.phone.value;
    var password1 = document.gform.password1.value;
    var credit = document.gform.credit.value;

    sessionStorage.setItem("name", name);
    sessionStorage.setItem("password1", password1);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("url", url);
    sessionStorage.setItem("passwd", passwd);
    sessionStorage.setItem("bday", bday);
    sessionStorage.setItem("bday1", bday1);
    sessionStorage.setItem("ssn", ssn);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("credit", credit);
      alert("saved to session storage");
}
function readFromLocalStorage() {
    if (localStorage.getItem("name") === null) {
        alert("Values are not stored in local storage");
    }
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("password1").value = localStorage.getItem("password1");
    document.gform.email.value = localStorage.getItem("email");
    document.gform.url.value = localStorage.getItem("url");
    document.gform.password.value = localStorage.getItem("passwd");
    document.gform.bday.value = localStorage.getItem("bday");
    document.gform.bday1.value = localStorage.getItem("bday1");
    document.gform.ssn.value = localStorage.getItem("ssn");
    document.gform.phone.value = localStorage.getItem("phone");
    document.gform.credit.value = localStorage.getItem("credit");
    

}
function readFromSessionStorage() {
    if (sessionStorage.getItem("name") === null) {
        alert("Values are not stored in session");
    }
    document.getElementById("name").value = sessionStorage.getItem("name");
    document.getElementById("password1").value = sessionStorage.getItem("password1");
    document.getElementById("email").value = sessionStorage.getItem("email");
    document.getElementById("url").value = sessionStorage.getItem("url");
    document.getElementById("password").value = sessionStorage.getItem("passwd");
    document.getElementById("bday").value = sessionStorage.getItem("bday");
    document.getElementById("bday1").value = sessionStorage.getItem("bday1");
    document.getElementById("ssn").value = sessionStorage.getItem("ssn");
    document.getElementById("phone").value = sessionStorage.getItem("phone");
    document.getElementById("credit").value = sessionStorage.getItem("credit");
   


}

function onlineCheck() {
    var option = navigator.onLine;
    alert(option);
    if (option == false) {
        alert("Browser offline");
    }
    else {
        alert("Browser online");
    }

}