document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    this.innerHTML = "☀️ Light Mode";
  } else {
    this.innerHTML = "🌙 Dark Mode";
  }
};

let memory = 0; // Declare memory here, outside the listener

let outPut = document.querySelector(".output");
let inPut = document.querySelector(".input");
let buttons = document.querySelectorAll(".container button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = button.innerHTML;
    let lowerValue = value.toLowerCase();

    if (lowerValue === "reset") {
      outPut.innerHTML = "0";
      inPut.innerHTML = "";
    } else if (lowerValue === "delete") {
      inPut.innerHTML = inPut.innerHTML.slice(0, -1);
    } else if (lowerValue === "turn off") {
      outPut.innerHTML = "";
      inPut.innerHTML = "";
    } else if (lowerValue === "turn on") {
      outPut.innerHTML = "0";
      inPut.innerHTML = "";
    } else if (value === "=") {
      try {
        outPut.innerHTML = eval(inPut.innerHTML);
      } catch (error) {
        outPut.innerHTML = "Error";
      }
    } else if (value === "%") {
      try {
        let currentValue = eval(inPut.innerHTML);
        let percentValue = currentValue / 100;
        outPut.innerHTML = percentValue;
        inPut.innerHTML = percentValue.toString();
      } catch (error) {
        outPut.innerHTML = "Error";
      }
    } else if (value === "=") {
      try {
        // Replace √number with Math.sqrt(number)
        let expression = inPut.innerHTML.replace(
          /√(\d+(\.\d+)?)/g,
          "Math.sqrt($1)"
        );

        // Replace ^ with **
        expression = expression.replace(/\^/g, "**");

        outPut.innerHTML = eval(expression);
      } catch (error) {
        outPut.innerHTML = "Error";
      }
    } else if (value === "=") {
      try {
        let expression = inPut.innerHTML
          .replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)")
          .replace(/\^/g, "**");
        outPut.innerHTML = eval(expression);
      } catch (error) {
        outPut.innerHTML = "Error";
      }
    } else if (value === "M+") {
      memory += parseFloat(outPut.innerHTML) || 0;
    } else if (value === "M-") {
      memory -= parseFloat(outPut.innerHTML) || 0;
    } else if (value === "MR") {
      inPut.innerHTML += memory.toString();
    } else if (value === "MC") {
      memory = 0;
    } else {
      inPut.innerHTML += value;
    }
  });
});
