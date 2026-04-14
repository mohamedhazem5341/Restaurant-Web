let categories = document.querySelector(".categories span");
let dishes = document.querySelector(".dishes span");

//
//
let dishesList = document.querySelectorAll(".dishesList li");
let foodCard = document.querySelectorAll(".foodMenu .foodCard");

// this categories & dishes amount (count) that shows in hero section
categories.innerHTML = dishesList.length - 1;
dishes.innerHTML = foodCard.length;
//
//
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
//////////////////////

let dishesInput = document.getElementById("dishesInput");

const cardName = Array.from(document.querySelectorAll(".cardInfo .cardName"));
console.log();

let foodNames = [];
for (i = 0; i < cardName.length; i++) {
  foodNames.push(cardName[i].innerHTML.toLowerCase());
}
console.log(foodNames);


let foodMenu = document.querySelector(".foodMenu");

dishesInput.addEventListener("input", () => {
  const searchFood = dishesInput.value.toLowerCase();
  console.log(searchFood);

   const result = foodNames.filter((name) => name.includes(searchFood));
   console.log(result);

  // for (i = 0; i < cardName.length; i++) {
  //   if (cardName[i].innerHTML.includes(searchFood)) {
  //     foodCard[i].classList.add("show")
  //   }
  //   if (cardName[i].innerHTML.includes(!searchFood)) {
  //     foodCard[i].classList.add("hide")
  //   }
  //   console.log(cardName[i].innerHTML.includes(searchFood));
  // }
});

// cardName.filter(name => name.toLowerCase().includes(searchFood))

console.log(cardName.length);
