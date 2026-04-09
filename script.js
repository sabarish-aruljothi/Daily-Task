let email = document.querySelectorAll("form [type=email]");
let firstName = document.querySelectorAll("form [name=name]");
let phone = document.querySelectorAll("form [name=phone]");

email.forEach((element) => {
  element.addEventListener("input", (e) => {
    let emailPattern =
      /^([a-zA-Z0-9_\-\+\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,9})$/;
    if (!emailPattern.test(e.target.value)) {
      e.target.nextElementSibling.textContent = "Email is invalid";
    } else if (e.target.value == "") {
      e.target.nextElementSibling.textContent = "";
    } else {
      e.target.nextElementSibling.textContent = "";
    }
  });
});

firstName.forEach((e) => {
  e.addEventListener("input", (e) => {
    let namePattern = /^[a-zA-Z]+$/;
     if (!namePattern.test(e.target.value)) {
      e.target.nextElementSibling.textContent = "Space and special characters are not allowed";
    } else if (e.target.value == "") {
      e.target.nextElementSibling.textContent = "";
    } else {
      e.target.nextElementSibling.textContent = "";
    }
  });
});

phone.forEach((e) => {
  e.addEventListener("input", (e) => {
     let phonePattern = /^[0-9]{10}$/;
    if (e.target.value === "") {
    e.target.nextElementSibling.textContent = "";
} else if (!phonePattern.test(e.target.value)) {
    e.target.nextElementSibling.textContent = "Phone number must be 10 digits";
} else {
    e.target.nextElementSibling.textContent = "";
}
  });
});

document.querySelectorAll("form button").forEach(e=>{
    e.addEventListener("click",element=>{
        element.preventDefault();

       document.querySelector("h1").textContent=`Your email is ${email.value} and the name is${firstName.value} and the mobile number is ${phone.value}`;
    })
})