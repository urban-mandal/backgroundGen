const body = document.querySelector("body");
const input1 = document.querySelector("#pick");
const input2 = document.querySelector("#pick2");
const h3 = document.querySelector("h3");

document.addEventListener("DOMContentLoaded", function () {
  console.log(window.getComputedStyle(body));
  h3.textContent = window
    .getComputedStyle(body)
    .getPropertyValue("background-image");
  input1.value = "#ff0000";
  input2.value = "#ffff00";
});

input1.addEventListener("input", linear);
input2.addEventListener("input", linear);

function linear() {
  let style = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
  body.style.background = style;
  h3.innerHTML = "";
  h3.appendChild(document.createTextNode(style + ";"));
}
