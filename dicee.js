var randOne = Math.floor(Math.random() * 6) + 1;
var randTwo = Math.floor(Math.random() * 6) + 1;

var pathOne = "images/" + "dice" + randOne + ".png";
var pathTwo = "images/" + "dice" + randTwo + ".png";

document.getElementsByTagName("img")[0].setAttribute("src", pathOne);
document.getElementsByTagName("img")[1].setAttribute("src", pathTwo);

var title = document.getElementsByTagName("h1")[0];

if (randOne > randTwo) {
  title.innerText = "🚩 Player One Wins!";
} else if (randOne < randTwo) {
  title.innerText = "Player Two Wins! 🚩";
} else {
  title.innerText = "Draw";
}
