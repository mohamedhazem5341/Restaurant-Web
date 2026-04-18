let foodImageInput = document.querySelector("#foodImageInput");
let foodNameInput = document.querySelector("#foodNameInput");
let foodDescribeInput = document.querySelector("#foodDescribeInput");
let foodPriceInput = document.querySelector("#foodPriceInput");
let addFoodBtn = document.querySelector("#addFoodBtn");
let previewImage = document.querySelector(".previewImage");
let example = document.querySelector(".foodMenu");


addFoodBtn.addEventListener("click", (eo) => {
  eo.preventDefault();
  let createFoodCard = `
<div class="foodCard" data-target="Starters">
        <div class="cardImg">
        <img src="${foodImageInput.value}" alt="" />
        </div>
        <a href="" class="cardInfo">
          <h1 class="cardName">${foodNameInput.value}</h1>
          <p class="cardDescribe">${foodDescribeInput.value}</p>
        </a>
        <div class="cardBtn">
          <button class="primaryBtn">Order now</button>
          <button class="secondaryBtn">Save</button>
        </div>
      </div>
`;

  example.innerHTML += createFoodCard;
});
