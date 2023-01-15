function validateInputs() {

    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const contact = document.getElementById("contact")
    const bio = document.getElementById("bio")
    console.log(fname, lname,email,password,contact,bio)

    if(fname.value == "" || fname.value.length < 3 || fname.value.length > 16) {
        console.log("FnameError");
        let errorMsg = document.getElementById("fnameError");
        errorMsg.innerHTML = "First Name must be Alphanumeric and contains 3 - 16 characters";
    }
    else {
        document.getElementById("fname").style.border = "2px solid green";
    }

    if(lname.value == "" || lname.value.length < 3 || lname.value.length > 16) {
        console.log("lnameError");
        let errorMsg = document.getElementById("lnameError");
        errorMsg.innerHTML = "Last Name must be Alphanumeric and contains 3 - 16 characters";
    }
    else {
        document.getElementById("lname").style.border = "2px solid green";
    }

    if(email.value == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) != true) {
        console.log("Email Error");
        let errorMsg = document.getElementById("emailError");
        errorMsg.innerHTML = "Email must be a valid email address, e.g. example@gmail.com";
    }
    else {
        document.getElementById("email").style.border = "2px solid green";
    }

    if(password.value == "" || password.value.length < 6 || password.value.length > 20) {
        console.log("Password Error");
        let errorMsg = document.getElementById("passwordError");
        errorMsg.innerHTML = "Password must be alphanumeric (@, _ and - also allowed) and between 6 - 20 characters";
    }
    else {
        document.getElementById("password").style.border = "2px solid green";
    }

    if(contact.value == "" || /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(contact.value) != true) {
        console.log("Contact Error");
        let errorMsg = document.getElementById("contactError");
        errorMsg.innerHTML = "A valid contact number must be of 10 digits";
    }
    else {
        document.getElementById("contact").style.border = "2px solid green";
    }

    if(bio.value == "" || bio.value.length < 8 || bio.value.length > 50) {
        console.log("Bio Error");
        let errorMsg = document.getElementById("bioError");
        errorMsg.innerHTML = "Bio must contains only lowercase letters, underscorese, hyphens, and be 8 - 20 characters";
    }
    else {
        document.getElementById("bio").style.border = "2px solid green";
    }
}

window.addEventListener("load", function() {
    console.log("I am loaded")
})