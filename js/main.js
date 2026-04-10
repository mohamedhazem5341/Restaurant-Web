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

// slider functionality
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let slider = document.querySelector(".slides");
let feeds = document.querySelectorAll(".feeds");

let index = 0;

nextBtn.onclick = () => {
  if (index < feeds.length - 1) {
    index++;
    updateSlider();
  } else if (index === feeds.length - 1) {
    index = 0;
    updateSlider();
  }
};
prevBtn.onclick = () => {
  if (index > 0) {
    index--;
    updateSlider();
  } else if (index === 0) {
    index = feeds.length - 1;
    updateSlider();
  }
};

// to show as amount of circles as sliders
let pointFeed = document.querySelector(".pointFeed");
for (i = 0; i < feeds.length; i++) {
  pointFeed.innerHTML += `<div class="circle"></div>`;
}
let circle = document.querySelectorAll(".circle");

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  // to highlight circle number that matches the slide
  for (i = 0; i < circle.length; i++) {
    if (index === i) {
      circle[i].classList.add("active");
    } else {
      circle[i].classList.remove("active");
    }
  }
}
updateSlider();
// make dots (circles) clickable and change slides
circle.forEach((dot, j) => {
  dot.addEventListener("click", () => {
    for (i = 0; i < circle.length; i++) {
      if (j === i) {
        index = i;
        updateSlider();
      }
    }
  });
});
//
