var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var player1 = prompt("Player1 Name: ");
var player2 = prompt("Player2 Name: ");

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

document.querySelector(".player1").innerHTML = player1;
document.querySelector(".player2").innerHTML = player2;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
    document.querySelector(".player1").style.color = "red";
    document.querySelector(".player1").style.fontStyle = "italic";

}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
    document.querySelector(".player2").style.color = "red";
    document.querySelector(".player2").style.fontStyle = "italic";
}

else {
    document.querySelector("h1").innerHTML="🎌 Draw 🎌";
}
