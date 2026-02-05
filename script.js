let input = document.getElementById("number-display");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    // equal button
   if (e.target.dataset.action === "equals") {
  try {
    string = eval(string).toString();
    input.innerHTML = string;
  } catch (error) {
    input.innerHTML = "Error";
    string = "";
    console.log("Calculation error:", error);
  }
}
    // clear button
    else if (e.target.dataset.action === "clear") {
      string = "";
      input.innerHTML = "0";
    }
    // backspace button
    else if (e.target.dataset.action === "back") {
      string = string.slice(0, -1);
      input.innerHTML = string || "0";
    }
    // number and operator buttons
    else if (e.target.dataset.value) {
      string += e.target.dataset.value;
      input.innerHTML = string;
    }
  });
});
