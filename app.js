const ham = document.querySelector(".menu-toggle");
const tog = document.querySelector(".toggle");
const sertif = document.querySelectorAll(".certif");
const sidebar = document.querySelectorAll("nav .toggle li");
ham.addEventListener("click", () => {
  tog.classList.toggle("aktif");
});

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !tog.contains(e.target)) {
    tog.classList.remove("aktif");
  }
});

function loopBG(all) {
  all.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      el.style.backgroundColor = " rgb(40 40 40)";
    });
    el.addEventListener("mouseleave", function () {
      el.style.backgroundColor = "rgb(26, 26, 26)";
    });
  });
}
loopBG(sidebar);
