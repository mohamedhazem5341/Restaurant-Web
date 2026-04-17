/////////////////////////////////// NavBar ///////////////////////////////////
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
/////////////////////////////////// ToUpBtn ///////////////////////////////////
let upBtnDiv = document.querySelector(".toUpDiv");
let upBtn = document.querySelector(".toUpDiv .toUpBtn");

window.addEventListener("scroll", () => {
  if (scrollY >= 1200) {
    upBtnDiv.style.display = "block";
  } else {
    upBtnDiv.style.display = "none";
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/////////////////////////////////// # ///////////////////////////////////
