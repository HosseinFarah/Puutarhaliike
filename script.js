// Get all the nav links
var navLinks = document.querySelectorAll("#myTopnav a");

// Loop through all the links
for (var i = 0; i < navLinks.length; i++) {
  // Add a click event listener to each link
  navLinks[i].addEventListener("click", function () {
    // Remove the active class from all links
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    // Add the active class to the clicked link
    this.classList.add("active");
  });
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();


// Fetching data from the server for the data list
fetch("http://localhost:3001/kaupungit")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const kaupungit = document.querySelector("#kaupungit");
    data.forEach(kaupunki=>{
     let opti= document.createElement('option');
     opti.value=kaupunki.value;
     kaupungit.append(opti);
    })
  });
