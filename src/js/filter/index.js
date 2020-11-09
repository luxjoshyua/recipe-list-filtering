// need to get the search value, which is the textContent of the button clicked

// get the 6 meal types
const mealBtns = document.querySelectorAll(".filter-types .filter-item");
// console.log(mealTypes);
// get the 5 dietary types
const dietTypes = document.querySelectorAll(".filter-dietary .filter-item");
// console.log(dietTypes);
// select all the recipes on page
const recipes = document.querySelectorAll(".recipe-single");

// need to loop through all my recipes on the page, checking if their class name matches
// the text content of the buttons

// go through and make an array with all the matching data
// e.g. deserts that are all, vegetarian, pescatarian

mealBtns.forEach((meal) => {
  meal.addEventListener("click", (e) => {
    // remove/add the active class from the button
    document.querySelector(".activeButton")
      ? document.querySelector(".activeButton").classList.remove("activeButton")
      : "";
    meal.classList.add("activeButton");
    let target = e.target.innerText;

    recipes.forEach((recipe) => {
      if (target === "Entrees") {
        if (recipe.classList.contains("entree")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }

      if (target === "Mains") {
        if (recipe.classList.contains("main")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }
      if (target === "Salads") {
        if (recipe.classList.contains("salad")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }

      // when I click on salad, I then need to check
      // which classes match the diet types, then show them

      // I initally want to show all salad types

      // then if I click a salad that is only suitable for
      // all, vegetarian and pescatarian, I need to hide
      // the one/s that aren't suitable, in this case
      // black bean salad

      if (target === "Sides") {
        if (recipe.classList.contains("side")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }
      if (target === "Desserts") {
        if (recipe.classList.contains("dessert")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }
      if (target === "Drinks") {
        if (recipe.classList.contains("drink")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }
    });
  });
});
