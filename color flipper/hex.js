const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const button = document.querySelector("#btn");
const colorName = document.querySelector("#color-name");

button.addEventListener("click", function () {
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += hex[getNumber()];
  }
  document.body.style.backgroundColor = hash;
  colorName.textContent = hash;
});
function getNumber() {
  return Math.floor(Math.random() * hex.length);
}
