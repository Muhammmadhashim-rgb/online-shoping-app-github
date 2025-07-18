document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const  btn = document.getElementById("submit")


    const emailValidationShow  = document.getElementById("emailValidation");
    const passwordValidationShow  = document.getElementById("passwordValidation");



    emailValidationShow.textContent = "";
    passwordValidationShow.textContent = "";



    invalid = true ;



    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        emailValidationShow.textContent = "Plese Enter a Ture Email"
        invalid = false
    }


    if (password.length < 6) {
        passwordValidationShow.textContent = "Plese 6 characters Enter"
        invalid = false
    }


    if (invalid) {
        window.location.href = "/redirect home page/redirect hom.html"
    }
})