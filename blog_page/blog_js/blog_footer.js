document.addEventListener("DOMContentLoaded", function () {

  /* ===== DROPDOWN (ALL COLUMNS MOBILE) ===== */
  const dropdowns = document.querySelectorAll(".foot-dropdown");

  dropdowns.forEach(function(dropdown){

    const toggle = dropdown.querySelector(".foot-toggle");

    toggle.addEventListener("click", function(){

      if (window.innerWidth <= 768) {
        dropdown.classList.toggle("active");
      }

    });

  });

  /* ===== EMAIL VALIDATION ===== */
  const form = document.querySelector(".foot-form");
  const emailInput = document.getElementById("footEmail");
  const message = document.querySelector(".foot-msg");

  if(form){
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailValue = emailInput.value.trim();
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!re.test(emailValue)) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
        return;
      }

      message.style.color = "lightgreen";
      message.textContent = "Thank you! We'll contact you soon.";
      emailInput.value = "";
    });
  }

});


/* -------------------------
   Footer dropdown (mobile)
--------------------------*/
