const coin = [
  "Head",
  "Tails",
  "Head",
  "Tails",
  "Head",
  "Tails",
  "Head",
  "Tails",
];

const button = document.querySelector("#btn");
const answer = document.querySelector("#coin-flip-result");

button.addEventListener("click", function () {
  const number = randomNumber();

  answer.innerHTML = coin[number];
});

function randomNumber() {
  return Math.floor(Math.random() * coin.length);
}
