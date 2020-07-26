function rollDice() {
  var img = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
  var randomNumber1 = 1
  var randomNumber2 = 1

  while (randomNumber1 === randomNumber2) {
    randomNumber1 = Math.floor(Math.random() * 6)
    randomNumber2 = Math.floor(Math.random() * 6)
  }

  document.querySelectorAll("img")[0].setAttribute("src", "images/" + img[randomNumber1])
  document.querySelectorAll("img")[1].setAttribute("src", "images/" + img[randomNumber2])

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player1 Wins🥇"
  } else {
    document.querySelector("h1").innerText = "Player2 Wins🥇"
  }
}
