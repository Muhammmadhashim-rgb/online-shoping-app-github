document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();



    // value
    const confirmationCode = document.getElementById("confirmationCode").value.trim();


    // show Validation
    const confirmationCodeValidationShow = document.getElementById("confirmationCodeValidationShow")

  


    confirmationCodeValidationShow.textContent = ""


    let invalid = true


    
    if (confirmationCode === "") {
        confirmationCodeValidationShow.textContent = "Plese Enter a Type Of Code"
        invalid = false
    }



    if (invalid) {
        window.location.href = '/Enter New Password page/Enter New Password.html';
    }
});




