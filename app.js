const display = document.getElementById("display");

const numbers = document.querySelectorAll(".continuer button");
let operation = "";
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    const values = event.target.textContent;
    if (values === "=") {
      display.value = eval(display.value);
    } else if (values === "C") {
      display.value = "";
    } else {
      display.value += values;
    }
  });
});
