document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = Array.from(document.getElementsByClassName("btn"));

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = button.getAttribute("data-action");
      const num = button.getAttribute("data-num");
      const operator = button.getAttribute("data-operator");

      if (action === "clear") {
        display.textContent = "0";
      } else if (action === "equals") {
        display.textContent = eval(display.textContent);
      } else if (num) {
        if (display.textContent === "0") {
          display.textContent = num;
        } else {
          display.textContent += num;
        }
      } else if (operator) {
        display.textContent += ` ${operator} `;
      }
    });
  });
});
