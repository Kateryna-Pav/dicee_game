var player1Name = prompt("Player1 Name: ");
var player2Name = prompt("Player2 Name: ");

var player1 = player1Name.toUpperCase();
var player2 = player2Name.toUpperCase();

var refreshButton = document.querySelectorAll(".refresh-btn").length;

for (var i = 0; i < refreshButton; i++) {
    document.querySelectorAll(".refresh-btn")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;
        refresh(buttonInnerHTML);
    });

}


function refresh() {

    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    document.querySelector(".player1").innerHTML = player1;
    document.querySelector(".player2").innerHTML = player2;

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
        document.querySelector(".player1").style.color = "red";
        document.querySelector(".player1").style.fontStyle = "italic";
        document.querySelector(".player1").style.fontWeight = "bold";
        document.querySelector(".player2").style.color = "#79a3b1";
        document.querySelector(".player2").style.fontStyle = "none";
        document.querySelector(".player2").style.fontWeight = "none";

    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
        document.querySelector(".player2").style.color = "red";
        document.querySelector(".player2").style.fontStyle = "italic";
        document.querySelector(".player2").style.fontWeight = "bold";
        document.querySelector(".player1").style.color = "#79a3b1";
        document.querySelector(".player1").style.fontStyle = "none";
        document.querySelector(".player1").style.fontWeight = "none";

    } else {
        document.querySelector("h1").innerHTML = "🎌 Draw 🎌";
        document.querySelector(".player2").style.color = "#79a3b1";
        document.querySelector(".player2").style.fontStyle = "none";
        document.querySelector(".player2").style.fontWeight = "none";
        document.querySelector(".player1").style.color = "#79a3b1";
        document.querySelector(".player1").style.fontStyle = "none";
        document.querySelector(".player1").style.fontWeight = "none";

    }
}
