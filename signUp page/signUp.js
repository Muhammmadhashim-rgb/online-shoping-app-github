document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    // value
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // show Validation
    const firstNameValidationShow = document.getElementById("firstNameValidationShow")
    const lastNameValidationShow = document.getElementById("lastNameValidationShow")
    const emailValidationShow = document.getElementById("emailValidationShow")
    const numberValidationShow = document.getElementById("numberValidationShow")
    const passwordValidationShow = document.getElementById("passwordValidationShow")
    const confirmPasswordValidationShow = document.getElementById("confirmPasswordValidationShow")


    firstNameValidationShow.textContent = ""
    lastNameValidationShow.textContent = ""
    emailValidationShow.textContent = ""
    numberValidationShow.textContent = ""
    passwordValidationShow.textContent = ""
    confirmPasswordValidationShow.textContent = ""

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





    if (password.length < 6) {
        passwordValidationShow.textContent = "Plese 6 characters Enter"
        invalid = false
    }


    if (password !== confirmPassword) {
        confirmPasswordValidationShow.textContent = "This Passwords not match"
        invalid = false
    }

    if (invalid) {
        window.location.href = "/redirect home page/redirect hom.html"
    }
});









