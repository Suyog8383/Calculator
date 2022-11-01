let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector("input");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      input.value = string;
    }
  });
}
