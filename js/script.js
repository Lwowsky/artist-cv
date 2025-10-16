document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const menu = document.querySelector(".menu");
    if (burger && menu) {
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
      });
    }
  });