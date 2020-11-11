// need to get the search value, which is the textContent of the button clicked

// get the 6 meal types
const mealBtns = document.querySelectorAll(".filter-types .filter-item");
// get the 5 dietary types
const dietTypes = document.querySelectorAll(".filter-dietary .filter-item");
// select all the recipes on page
const recipes = document.querySelectorAll(".recipe-single");

mealBtns.forEach((meal) => {
  meal.addEventListener("click", (e) => {
    // remove/add the active class from the button
    document.querySelector(".activeButton")
      ? document.querySelector(".activeButton").classList.remove("activeButton")
      : "";
    meal.classList.add("activeButton");
    // select the html target text
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

      // when I click on salad, I need to show all that contain the salad class
      // then I need to check the dietary types

      // if i want the octopus salad,
      // I need to check the salads that contain the classes pescatarian and all

      // I then need to add an active class to those that do
      // and add an inactive class to the others

      if (target === "Salads") {
        if (recipe.classList.contains("salad")) {
          recipe.classList.toggle("active");
        } else {
          recipe.classList.remove("active");
          recipe.classList.add("inactive");
        }
      }

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
