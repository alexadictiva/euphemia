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
