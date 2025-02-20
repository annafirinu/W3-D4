const headerSpan = document.getElementById("current-year");
const year = new Date().getFullYear();
headerSpan.innerText = year;

numberCell = 90;

const createTombolaCells = function (numberCell) {
  for (let i = 0; i < numberCell; i++) {
    const cell = document.createElement("div");
    cell.classList.add("day");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    cell.appendChild(cellValue);
    const tombolaSection = document.getElementById("tombola");
    tombolaSection.appendChild(cell);
  }
};

const createButton = function () {
  const newButton = document.createElement("button");
  newButton.classList.add("styleButton");
  newButton.innerText = "ESTRAI!";
  newButton.addEventListener("click", () => {
    console.log("CIAO");
  });
  const formButtonconteiners = document.getElementById("estrazione");
  formButtonconteiners.appendChild(newButton);
};

createTombolaCells(numberCell);
createButton();
/*Math.floor(Math.random() * 91*/
