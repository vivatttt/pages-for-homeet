document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var textName = document.getElementById("nameError");
  var textEmail = document.getElementById("emailError");

  nameInput.addEventListener("input", function () {
    var colorName;
    var backgroundName;
    var isNameValid = new RegExp("^[а-яА-ЯёЁa-zA-Z ]+$");
    var name = document.getElementById("name").value;

    if (isNameValid.test(name)) {
      colorName = "#f4f4f6";
      backgroundName = "#f4f4f6";
      textName.innerHTML = "";
    } else if (name == "") {
        backgroundName = "#faf1f1";
      colorName = "#d63a3a";
      textName.innerHTML = "Обязательное поле";
    } else {
        backgroundName = "#faf1f1";
      colorName = "#d63a3a";
      textName.innerHTML = "Неверный формат имени";
    }
    nameInput.style.background = backgroundName;
    nameInput.style.borderColor = colorName;
  });

  emailInput.addEventListener("input", function () {
    var colorEmail;
    var backgroundEmail;
    var isEmailValid = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    var email = document.getElementById("email").value;
    // console.log(email)
    if (isEmailValid.test(email)) {
      colorEmail = "#f4f4f6";
        backgroundEmail = "#f4f4f6";
      textEmail.innerHTML = "";
    } else if (email == "") {
      colorEmail = "#d63a3a";
      backgroundEmail = "#faf1f1";
      textEmail.innerHTML = "Обязательное поле";
    } else {
      colorEmail = "#d63a3a";
      backgroundEmail = "#faf1f1";
      textEmail.innerHTML = "Неверный формат почты";
    }
    emailInput.style.borderColor = colorEmail;
    emailInput.style.background = backgroundEmail;
  });

  document.getElementById("myForm").addEventListener("submit", function (event) {
    var isNameValid = new RegExp("^[а-яА-ЯёЁa-zA-Z ]+$");
    var isEmailValid = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
      if (!isNameValid.test(name) || !isEmailValid.test(email)) {
        event.preventDefault();
      }
    });
});
