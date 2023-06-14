

//toggling between social media views on the contact page
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

//get most recent commit time in format mm/dd/yyyy of main branch using github api
//FOR PERSONAL WEBPAGE
function getCommitTime1() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repos/markwarren1/MarkWarren/commits/main', true);
  request.onload = function () {
    var data = JSON.parse(this.response);
    var date = new Date(data.commit.committer.date);
    var formattedDate = date.toLocaleDateString();
    //append formatted date to single element with id 'personalWebpage'
    document.getElementById('personalWebpage').innerHTML += formattedDate;
  }
  request.send();
}

//get most recent commit time in format mm/dd/yyyy of main branch using github api
//FOR Tic-Tac-Toe
function getCommitTime2() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.github.com/repos/markwarren1/Tic-Tac-ToeGame/commits/master', true);
  request.onload = function () {
    var data = JSON.parse(this.response);
    var date = new Date(data.commit.committer.date);
    var formattedDate = date.toLocaleDateString();
    //append formatted date to single element with id 'personalWebpage'
    document.getElementById('tictactoe').innerHTML += formattedDate;
  }
  request.send();
}
    
    