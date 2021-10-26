let buttonMenu = document.getElementById("buttonMenu");
let overlay = document.getElementById("overlay");
buttonMenu.addEventListener("click", showMenu);
let menu = document.querySelector(".menu");

function showMenu() {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
}
