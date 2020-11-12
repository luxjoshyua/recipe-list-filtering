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

    // if the last active meal equals the meal we are on
    if (lastActiveMeal === meal) {
      // set the active meal to null
      lastActiveMeal = null;
    } else {
      // otherwise the last active meal does equal the meal
      lastActiveMeal = meal;
      // so set the button to be active
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

const saveLocalArray = [];

const filterReciplies = () => {
  // getAttribute() method returns the value of a specified
  // attribute on the element

  // the active meal equals the last active meal if it contains the data attribute,
  // otherwise set it to null
  const activeMeal = lastActiveMeal
    ? lastActiveMeal.getAttribute("data-meal-select")
    : null;

  // the active diel equals the last active diet if it contains the data attribute,
  // otherwise set it to null
  const activeDiet = lastActiveDiet
    ? lastActiveDiet.getAttribute("data-meal-filter")
    : null;

  // loop through all our recipes
  recipes.forEach((recipe) => {
    // remove the active class from all of them initially
    recipe.classList.remove("active");

    // if the active meal isn't selected and active diet isn't selected, return i.e. do nothing because
    // there's nothing to check, stop function
    if (activeMeal === null && activeDiet === null) {
      return;
    }

    const containsMeal =
      // if active meal isn't selected set containsMeal to true
      // otherwise the active recipe contains the activeMeal var defined above
      activeMeal === null ? true : recipe.classList.contains(activeMeal);
    const containsDiet =
      // if active diet isn't selected set containsDiet to true
      // otherwise the active recipe contains the activeDiet var defined above
      activeDiet === null ? true : recipe.classList.contains(activeDiet);

    // if it containsMeal and containsDiet
    if (containsMeal && containsDiet) {
      // show the recipe
      recipe.classList.add("active");
      console.log(recipe.innerHTML);
      // localStorage.setItem("recipe", recipe.innerHTML);
    }
  });
};

const saved = localStorage.getItem("recipe");
const h1 = document.querySelector(".saved-recipe-text");
if (saved) {
  h1.innerHTML = saved;
}
// clear all my local saved data
localStorage.clear();

// console.log("What does array look like", saveLocalArray);

// look at local storage here
