const ham = document.querySelector(".menu-toggle");
const tog = document.querySelector(".toggle");
const sertif = document.querySelectorAll(".certif");
const sidebar = document.querySelectorAll("nav .toggle li");
ham.addEventListener("click", () => {
  tog.classList.toggle("aktif");
});

document.addEventListener("click", function (e) {
  if (!ham.contains(e.target) && !tog.contains(e.target)) {
    console.log("tai" + e);
    tog.classList.remove("aktif");
  }
});

function loopBG(all) {
  all.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      console.log("lu punya duit lu punya kuasa");
      el.style.backgroundColor = " rgb(40 40 40)";
    });
    el.addEventListener("mouseleave", function () {
      console.log("Tai");
      el.style.backgroundColor = "rgb(26, 26, 26)";
    });
  });
}
loopBG(sidebar);
