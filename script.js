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
     if (e.target.value == "")  {
           e.target.nextElementSibling.textContent = "";
    } else if (!namePattern.test(e.target.value) ) {
      e.target.nextElementSibling.textContent = "Space and special characters are not allowed";

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
     let isValid=true;
     document.querySelectorAll("input").forEach((e)=>{
      if (e.value==""){isValid= false}
      })
     if (isValid){
print(e.parentElement);
     }
     else {
      e.nextElementSibling.textContent="fill the details"
     }
    })
})

function print(formDetails){
  let details = new FormData(formDetails);
 let detailsExtract= Object.fromEntries(details);
 document.querySelector("h1").textContent=`Your name is ${detailsExtract.name} and the mail is ${detailsExtract.email} and the number is ${detailsExtract.phone}`

}



