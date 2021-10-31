let buttonMenu = document.getElementById("buttonMenu");
let overlay = document.getElementById("overlay");
buttonMenu.addEventListener("click", showMenu);
let menu = document.querySelector(".menu");

function showMenu() {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("overlay");
}
/* Swiper1 */
var swiper = new Swiper(".mySwiper", {});

/*FAQs Acordeon JQuery*/
$(".faqsContainer").on("click", "button", function () {
  var t = $(this);
  var tp = t.next();
  var p = t.parent().siblings().find("p");
  tp.slideToggle();
  p.slideUp();
});

/*Form*/

const form = document
  .querySelector("#form")
  .addEventListener("submit", handleSubmit);
const mailto = document.querySelector("#mailto");

function handleSubmit(event) {
  event.preventDefault();

  const formulario = new FormData(this);
  console.log(formulario.get("name"));
  console.log(formulario.get("address"));
  console.log(formulario.get("phone"));
  console.log(formulario.get("message"));

  mailto.setAttribute(
    "href",
    `mailto:academiatrucking@gmail.com?subject=${formulario.get(
      "name"
    )}, ${formulario.get("email")}&body=${formulario.get("message")}`
  );

  mailto.click();
}
