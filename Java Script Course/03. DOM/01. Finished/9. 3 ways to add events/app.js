// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function () {
  console.log("Hello World");
};

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");

best.addEventListener("click", () => {
  console.log("Yellow");
});

// ----------- Event (e) Object -----------
// It's an event object which contains information about particular event.

const form = document.querySelector("form");
const input = document.querySelector("input");
form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
});
