form = document.getElementById("form");
emailInput = document.getElementById("email");
emailErrorMessage = document.getElementById("email-error-message");
newsLetterContainer = document.querySelector(".news-letter-container");
successContainer = document.querySelector(".success-container");
dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail()) {
    newsLetterContainer.style.display = "none";
    successContainer.classList.remove("hidden");
  } else {
    return;
  }
});

dismissBtn.addEventListener("click", () => {
  emailInput.value = "";
  successContainer.style.display = "none";
  newsLetterContainer.style.display = "flex";
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
  emailInput.style.backgroundColor = "#ffe7e6";
  emailInput.style.border = "1.5px solid #f32720";
  emailErrorMessage.style.display = "block";
}
