document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    this.innerHTML = "☀️ Light Mode";
  } else {
    this.innerHTML = "🌙 Dark Mode";
  }
};

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
    } else {
      inPut.innerHTML += value;
    }
  });
});
