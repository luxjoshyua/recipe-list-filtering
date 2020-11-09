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

mealBtns.forEach((meal) => {
  meal.addEventListener("click", (e) => {
    // remove/add the active class from the button
    document.querySelector(".activeButton")
      ? document.querySelector(".activeButton").classList.remove("activeButton")
      : "";
    meal.classList.add("activeButton");
    let target = e.target.innerText;

    recipes.forEach((recipe) => {
      // reset the filtering
      recipe.classList.remove("active");
      if (target === "Entrees") {
        if (recipe.classList.contains("entree")) {
          recipe.classList.toggle("active");
        }
      }
      if (target === "Mains") {
        if (recipe.classList.contains("main")) {
          recipe.classList.toggle("active");
        }
      }
      if (target === "Salads") {
        if (recipe.classList.contains("salad")) {
          recipe.classList.toggle("active");
        }
      }
      if (target === "Sides") {
        if (recipe.classList.contains("side")) {
          recipe.classList.toggle("active");
        }
      }
      if (target === "Desserts") {
        if (recipe.classList.contains("dessert")) {
          recipe.classList.toggle("active");
        }
      }
      if (target === "Drinks") {
        if (recipe.classList.contains("drink")) {
          recipe.classList.toggle("active");
        }
      }
    });
  });
});
