//load evn variables
require('dotenv').config();

//toggling between social media views
function handleButtonClick(event) {
      var targetId = event.target.getAttribute("data-target-id");
      var contentElements = document.getElementsByClassName("content");
      var buttons = document.querySelectorAll(".btn-lg");

      for (var i = 0; i < contentElements.length; i++) {
        contentElements[i].classList.remove("active");
      }

      for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("btn-primary");
      }

      document.getElementById(targetId).classList.add("active");
      event.target.classList.add("btn-primary");

    }


