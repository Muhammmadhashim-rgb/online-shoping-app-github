document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    // value

    const newPassword = document.getElementById("newPassword").value;
    const confirmationPassword = document.getElementById("confirmationPassword").value;


    // show Validation
    const newPasswordValidationShow = document.getElementById("newPasswordValidationShow")
    const confirmationPasswordValidationShow = document.getElementById("confirmationPasswordValidationShow")



    newPasswordValidationShow.textContent = ""
    confirmationPasswordValidationShow.textContent = ""
  

    let invalid = true

    if (newPassword.length < 6) {
        newPasswordValidationShow.textContent = "Plese 6 characters Enter"
        invalid = false
    }


    if (newPassword !== confirmationPassword) {
        confirmationPasswordValidationShow.textContent = "This Passwords not match"
        invalid = false
    }

    if (invalid) {
        window.location.href = '/redirect home page/redirect hom.html';
    }
});









