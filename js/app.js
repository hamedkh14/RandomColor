const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnRgbColor = document.querySelector(".rgbColor");
const btnHexColor = document.querySelector(".hexColor");
const color = document.getElementById("color");

btnRgbColor.addEventListener("click", function () {
  let rgbColor = `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
  document.body.style.backgroundColor = rgbColor;
  color.textContent = `RGB Color Code: ${rgbColor}`;
});

btnHexColor.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(hex.length)];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = `Hex Color Code: ${hexColor}`;
});

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
