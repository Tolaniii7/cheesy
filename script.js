"use strict";

const nameInput = document.querySelector(".name-input");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const signUp = document.querySelector(".nav-button");
const emailInput = document.querySelector(".email-input");
const textArea = document.querySelector(".paragraph");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const contactNameError = document.querySelector(".contact-name-error");
const contactEmailError = document.querySelector(".contact-email-error");
const contactNameInput = document.querySelector(".contact-name-input");
const contactEmailInput = document.querySelector(".contact-email-input");
const form = document.getElementById("Form");
const formTwo = document.getElementById("form2");
const password = document.querySelector(".password-input");
const passwordTwo = document.querySelector(".password-input-2");
const passwordError = document.querySelector(".password-error");
const passwordTwoError = document.querySelector(".password-2-error");
const successMessage = document.querySelector(".success");
const textError = document.querySelector(".text-error");
const contactForm = document.querySelector(".contact-form");
const contactUs = document.querySelector(".contact");

let nameIsValid = false;

// nameInput.addEventListener("input", function (e) {
//   console.log(e.target.value.includes("a"));
// })

// console.log(ridi);

const closeFun = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  nameInput.style.border = "";
  nameError.innerHTML = "";
  emailInput.style.border = "";
  emailError.innerHTML = "";
  password.style.border = "";
  passwordError.innerHTML = "";
  passwordTwo.style.border = "";
  passwordTwoError.innerHTML = "";
};

signUp.addEventListener("click", function (e) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // nameInput.style.border = "";
  nameError.innerHTML = "";
  // emailInput.style.border = "";
  emailError.innerHTML = "";
  // password.style.border = "";
  passwordError.innerHTML = "";
  // passwordTwo.style.border = "";
  passwordTwoError.innerHTML = "";
});

closeModal.addEventListener("click", closeFun);

overlay.addEventListener("click", closeFun);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  namesFun();
  emailsFun();
  passwordFun();
  passwordTwoFun();

  // successMessage.classList.remove("hidden");
  success();
});

const namesFun = function () {
  const name = nameInput.value;

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "full name is required";
    nameInput.style.border = "3px solid red";
    return false;
  } else {
    document.querySelector(".name-input").style.border = "3px solid green";
    nameError.innerHTML = "";
    return true;
  }
};

const emailsFun = function () {
  const email = emailInput.value;
  if (email == "") {
    emailError.innerHTML = "Email is required";
    document.querySelector(".email-input").style.border = "3px solid red";
    return false;
  } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    document.querySelector(".email-input").style.border = "3px solid red";
    return false;
  } else {
    emailError.innerHTML = "";
    document.querySelector(".email-input").style.border = "3px solid green";
    emailError.innerHTML = "";
    return true;
  }
};

emailsFun.addEventListener;

const passwordFun = function () {
  const passWord = password.value;

  if (passWord == "") {
    document.querySelector(".password-input").style.border = "3px solid red";
    passwordError.innerHTML = "Enter Password";
    return false;
  } else if (passWord.length < 8) {
    document.querySelector(".password-input").style.border = "3px solid red";
    passwordError.innerHTML = "password must be at least 8 characters";
  } else {
    passwordError.innerHTML = "";
    document.querySelector(".password-input").style.border = "3px solid green";
    return true;
  }
};

const passwordTwoFun = function () {
  const passWord = password.value;
  const confirmPassword = passwordTwo.value;

  if (confirmPassword == "") {
    document.querySelector(".password-input-2").style.border = "3px solid red";
    passwordTwoError.innerHTML = "Enter Password";
    return false;
  } else if (confirmPassword.length >= 8 && confirmPassword === passWord) {
    document.querySelector(".password-input-2").style.border =
      "3px solid green";
    passwordTwoError.innerHTML = "";
    return true;
  }
};

const success = function () {
  const allInput =
    namesFun() && emailsFun() && passwordFun() && passwordTwoFun();
  console.log(namesFun(), emailsFun(), passwordFun(), passwordTwoFun());

  if (allInput == true) {
    successMessage.classList.remove("hidden");
    successMessage.innerHTML = `Registration is successful <i class="fa-solid fa-circle-check" style="color: #fff;"></i> `;

    return true;
  } else {
    successMessage.classList.remove("hidden");
    successMessage.innerHTML = "Try Again";
    return false;
  }
};

const footerOverlay = document.querySelector(".footer-overlay");
const footerModal = document.querySelector(".footer-modal");
const footerCloseModal = document.querySelector(".footer-close-modal");
const footerSuccess = document.querySelector(".footer-success");
const closeBtn = document.querySelector(".footer-close-modal");

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();

  contactNameFun();
  contactEmailFun();
  textAreaFun();

  contactSuccess();
});

const contactNameFun = function () {
  const contactName = contactNameInput.value;

  if (!contactName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    contactNameError.innerHTML = "full name is required";
    contactNameInput.style.border = "3px solid red";
    return false;
  } else {
    contactNameInput.style.border = "3px solid green";
    contactNameError.innerHTML = "";
    return true;
  }
};

const contactEmailFun = function () {
  const ContactEmail = contactEmailInput.value;
  if (ContactEmail == "") {
    contactEmailError.innerHTML = "Email is required";
    contactEmailInput.style.border = "3px solid red";
    return false;
  } else if (
    !ContactEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    contactEmailError.innerHTML = "Email invalid";
    contactEmailInput.style.border = "3px solid red";
    return false;
  } else {
    contactEmailError.innerHTML = "";
    contactEmailInput.style.border = "3px solid green";
    return true;
  }
};

const textAreaFun = function () {
  const text = textArea.value;
  const textRequired = 30;
  const left = textRequired - text.length;

  if (text == "") {
    textArea.style.border = "3px solid red";
    textError.innerHTML = "Field cannot be empty";
    return false;
  } else if (left >= 30) {
    textError.innerHTML = "Texts cannot exceed 100 characters";
    return false;
  } else if (left > 0) {
    textError.innerHTML = left + " more characters required";
    return false;
  } else {
    textArea.style.border = "3px solid green";
    textError.innerHTML = "";
    return true;
  }
};

const contactSuccess = function () {
  const allContactInput =
    contactNameFun() && contactEmailFun() && textAreaFun();
  console.log(contactNameFun(), contactEmailFun(), textAreaFun());
  if (allContactInput == true) {
    openFooterModal();
    return true;
  } else {
    footerSuccess.textContent = "Form is Empty";
    return false;
  }
};

const openFooterModal = function () {
  footerModal.classList.remove("contact-hidden");
  footerOverlay.classList.remove("contact-hidden");
  footerSuccess.textContent = "";
};

closeBtn.addEventListener("click", () => {
  footerModal.classList.add("contact-hidden");
  footerOverlay.classList.add("contact-hidden");
  contactNameInput.value = "";
  contactEmailInput.value = "";
  textArea.value = "";
  contactNameInput.style.border = "";
  contactEmailInput.style.border = "";
  textArea.style.border = "";
});

footerOverlay.addEventListener("click", () => {
  footerModal.classList.add("contact-hidden");
  footerOverlay.classList.add("contact-hidden");
  contactNameInput.value = "";
  contactEmailInput.value = "";
  contactNameInput.style.border = "";
  contactEmailInput.style.border = "";
  textArea.style.border = "";
  textArea.value = "";
});
