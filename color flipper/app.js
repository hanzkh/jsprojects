const colors = ["Red", "Yellow", "Blue", "Pink", "Green", "Purple", "Gray"];

const button = document.querySelector("#btn");
const colorName = document.querySelector("#color-name");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.background = colors[randomNumber];
  colorName.textContent = colors[randomNumber];
  console.log(randomNumber);
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
