form = document.getElementById("form");
emailInput = document.querySelector('input[type="email"]');
/*emailInput = document.getElementById("email");*/
emailErrorMessage = document.querySelector(".email-error-message");
newsLetterContainer = document.querySelector(".news-letter-container");
successContainer = document.querySelector(".success-container");
dismissBtn = document.getElementById("dismiss-btn");
emailNameUpdate = document.querySelector(".email-name-update");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail()) {
    newsLetterContainer.style.display = "none";
    successContainer.classList.remove("hidden");
    emailNameUpdate.innerText = emailInput.value;
  }
});

dismissBtn.addEventListener("click", () => {
  successContainer.classList.add("hidden");
  newsLetterContainer.style.display = "flex";
  resetErrorStyles();
});

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    error();
    return false;
  } else {
    return true;
  }
}

function error() {
  /*  emailInput.style.backgroundColor = "#ffe7e6";
  emailInput.style.border = "1.5px solid #f32720";*/
  emailInput.classList.add("email-error-styling");
  emailErrorMessage.classList.add("email-error-message-active");
}

function resetErrorStyles() {
  emailInput.value = "";
  emailInput.classList.remove("email-error-styling");
  emailErrorMessage.classList.remove("email-error-message-active");
}
