// need to get the search value, which is the textContent of the button clicked

// get the 6 meal types
const mealBtns = document.querySelectorAll(".filter-types .filter-item");
// get the 5 dietary types
const dietTypes = document.querySelectorAll(".filter-dietary .filter-item");
// select all the recipes on page
const recipes = document.querySelectorAll(".recipe-single");
// use this as a flag to reset the last active meal to equal null
let lastActiveMeal = null;
mealBtns.forEach((meal) => {
  meal.addEventListener("click", (e) => {
    // remove/add the active class from the button
    if (lastActiveMeal) {
      lastActiveMeal.classList.remove("activeButton");
    }
    if (lastActiveMeal === meal) {
      lastActiveMeal = null;
    } else {
      lastActiveMeal = meal;
      meal.classList.add("activeButton");
    }

    filterReciplies();
  });
});

let lastActiveDiet = null;
dietTypes.forEach((diet) => {
  diet.addEventListener("click", (e) => {
    // remove/add the active class from the button
    if (lastActiveDiet) {
      lastActiveDiet.classList.remove("activeButton");
    }
    if (lastActiveDiet === diet) {
      lastActiveDiet = null;
    } else {
      lastActiveDiet = diet;
      diet.classList.add("activeButton");
    }

    filterReciplies();
  });
});

const filterReciplies = () => {
  const activeMeal = lastActiveMeal
    ? lastActiveMeal.getAttribute("data-meal-select")
    : null;
  const activeDiet = lastActiveDiet
    ? lastActiveDiet.getAttribute("data-meal-filter")
    : null;

  recipes.forEach((recipe) => {
    recipe.classList.remove("active");

    // if nothing is selected show nothing
    if (activeMeal === null && activeDiet === null) {
      return;
    }

    const containsMeal =
      activeMeal === null ? true : recipe.classList.contains(activeMeal);
    const containsDiet =
      activeDiet === null ? true : recipe.classList.contains(activeDiet);

    if (containsMeal && containsDiet) {
      recipe.classList.add("active");
    }
  });
};
