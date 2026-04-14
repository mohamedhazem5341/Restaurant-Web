let dishesInput = document.getElementById("dishesInput");
let dishesList = document.querySelectorAll(".dishesList li");
let foodCard = document.querySelectorAll(".foodMenu .foodCard");
console.log(foodCard[0].dataset);
console.log(foodCard[0].dataset.target === dishesList[1].dataset.target);
console.log(dishesList[1].dataset.target);

dishesList.forEach((li, i) => {
  li.addEventListener("click", () => {
    // to add class style for ui changes if active
    for (j = 0; j < dishesList.length; j++) {
      dishesList[j].classList.remove("selected");
    }
    dishesList[i].classList.add("selected");
    
    // to show only the card user clicked on
    for (k = 0; k < foodCard.length; k++) {
      foodCard[k].classList.add("hide");
      foodCard[k].classList.remove("show");

      if (li.dataset.target === foodCard[k].dataset.target) {
        foodCard[k].classList.add("show");
      }

      if (li.dataset.target === "All") {
        foodCard[k].classList.remove("hide");
      }
    }
  });
});
