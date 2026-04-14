let menuBtn = document.querySelector(".menuToggle");
let smallMenu = document.querySelector(".smallMenu");

menuBtn.addEventListener("click", () => {
  smallMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!smallMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    smallMenu.classList.add("close");
    setTimeout(() => {
      smallMenu.classList.remove("close");
      smallMenu.classList.remove("active");
    }, 400);
  }
});