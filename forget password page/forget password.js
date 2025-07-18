document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    // value
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();


    // show Validation
    const firstNameValidationShow = document.getElementById("firstNameValidationShow")
    const lastNameValidationShow = document.getElementById("lastNameValidationShow")
    const emailValidationShow = document.getElementById("emailValidationShow")
    const numberValidationShow = document.getElementById("numberValidationShow")
  


    firstNameValidationShow.textContent = ""
    lastNameValidationShow.textContent = ""
    emailValidationShow.textContent = ""
    numberValidationShow.textContent = ""


    let invalid = true

    if (firstName === "") {
        firstNameValidationShow.textContent = "Plese Enter a First Name"
        invalid = false
    }


    if (lastName === "") {
        lastNameValidationShow.textContent = "Plese Enter a Last Name"
        invalid = false
    }



    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        emailValidationShow.textContent = "Plese Enter a Ture Email"
        invalid = false
    }




    const numberCheck = /^[0-9]{11}$/;
    if (!numberCheck.test(number)) {
        numberValidationShow.textContent = "Plese Enter a 1-10 Number"
        invalid = false
    }



    if (invalid) {
        window.location.href = '/Confirmation Window page/confirmation.html';
    }
});









