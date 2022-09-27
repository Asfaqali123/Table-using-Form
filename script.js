const regex = {
  firstname: /^[A-Za-z. ]{3,30}$/,
  lastname: /^[A-Za-z. ]{3,30}$/,
  emailcheck: /^[A-Za-z_]{3,}[0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/,
  phonenum: /^[0-9]{10}$/,
  pincodenum: /^[0-9]{6}$/,
};

const addbtn = () =>  {
    document.getElementById("form").style.display = "block";
    document.getElementById("table").style.display = "none";
}

function formSubmit() {
  var table = document.getElementById("tablecd");
  var row = table.insertRow(-1);
  var firstName = row.insertCell(0);
  var lastName = row.insertCell(1);
  var genders = row.insertCell(2);
  var phnNum = row.insertCell(3);
  var address = row.insertCell(4);
  var pincode = row.insertCell(5);

  function checkValidation() {
    var status = true;

    if (regex.firstname.test(document.getElementById("firstName").value)) {
      document.getElementById("fnameerror").innerHTML = " ";
    } else {
      status = false;
      document.getElementById("fnameerror").innerHTML =
        " ** please enter fisrt name ** ";
    }
    
    if (regex.lastname.test(document.getElementById("lastName").value)) {
      document.getElementById("lnameerror").innerHTML = " ";
    } else {
      status = false;
      document.getElementById("lnameerror").innerHTML =
        " ** please enter last name ** ";
    }

    if (regex.phonenum.test(document.getElementById("phnNum").value)) {
      document.getElementById("numbererror").innerHTML = " ";
    } else {
      status = false;
      document.getElementById("numbererror").innerHTML =
        " ** please enter valid number **";
    }

    if (regex.pincodenum.test(document.getElementById("pincode").value)) {
      document.getElementById("pinerror").innerHTML = " ";
    } else {
      status = false;
      document.getElementById("pinerror").innerHTML =
        " ** please enter valid pincode **";    
    }
    return status;
  }

  if (checkValidation()) {
    document.getElementById("form").style.display = "none";
    document.getElementById("table").style.display = "block";

    firstName.innerHTML = document.getElementById("firstName").value;
    lastName.innerHTML = document.getElementById("lastName").value;

    if (document.getElementById("Male").checked == true) {
      genders.innerHTML = document.getElementById("Male").value;
    } else {
      genders.innerHTML = document.getElementById("Female").value;
    }

    phnNum.innerHTML = document.getElementById("phnNum").value;
    address.innerHTML = document.getElementById("address").value;
    pincode.innerHTML = document.getElementById("pincode").value;
  }
}
