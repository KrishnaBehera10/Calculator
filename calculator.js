let display = document.querySelector(".display");
let keypress = document.querySelector(".key-press");
// console.log(keypress);

keypress.addEventListener("click", (e) => {
  if (e.target.classList.contains("key")) {
    if (e.target.textContent === "Ac") {
      display.innerHTML = "";
    } else if (e.target.id === "back") {
      display.textContent = display.innerHTML.slice(0, -1);
    } else if (e.target.textContent === "=") {
      display.textContent = eval(display.textContent);
    } else {
      display.innerHTML += e.target.textContent;
    }
  }
});
