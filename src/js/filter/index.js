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

const filterReciplies = () => {
  // getAttribute() method returns the value of a specified
  // attribute on the element

  // the active meal equals the last active meal if it contains the data attribute,
  // otherwise set it to null
  const activeMeal = lastActiveMeal
    ? lastActiveMeal.getAttribute("data-meal-select")
    : null;

  localStorage.setItem("activeMeal", activeMeal);

  // // the active diel equals the last active diet if it contains the data attribute,
  // // otherwise set it to null
  const activeDiet = lastActiveDiet
    ? lastActiveDiet.getAttribute("data-meal-filter")
    : null;

  localStorage.setItem("activeDiet", activeDiet);

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
    }
  });
};

// initialise empty array we're going to push our recipe numbers into
const numArray = [];

window.onload = () => {
  const savedRecipeList = document.querySelector(".saved-recipe-list");
  recipes.forEach((recipe) => {
    const saveRecipe = recipe.querySelectorAll(".save-recipe");
    // // if it exists on the page
    if (saveRecipe) {
      saveRecipe.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          // add a class to the saved recipe so you can see it has been clicked
          recipe.classList.add("savedToStorage");
          // get the num for the recipe clicked
          const num = recipe.getAttribute("data-id");

          // push that number into my empty array
          numArray.push(num);
          console.log(numArray);

          // then save the array to localStorage
          localStorage.setItem("recipeNumber", numArray);

          // once that recipe has been clicked, save the recipe to localStorage
          // localStorage.setItem("savedRecipe", recipe.innerHTML);
        });
      });
    }
    //   show the saved recipe list text
    if (savedRecipeList) {
      savedRecipeList.classList.add("active");
    }
  });

  const savedRecipeEl = document.querySelectorAll(".recipe-single-saved");
  if (savedRecipeEl) {
    savedRecipeEl.forEach((savedRecipe) => {
      // that saves the one recipe multiple times, need to do it for each recipe
      savedRecipe.innerHTML = localStorage.getItem("savedRecipe");
      savedRecipe.classList.add("active", "saved");
      savedRecipe.querySelector(".recipe-close");
      savedRecipe.addEventListener("click", () => {
        savedRecipe.classList.remove("active", "saved");
        localStorage.removeItem("savedRecipe");
      });
    });
  }
};

// this is a list of numbers, isn't an array
const x = localStorage.getItem("recipeNumber");
console.log(x);

/* save recipe function for each recipe clicked, not just one

1. Check if the user is on the saved collections page

2. If they are, get an array of items from storage. e.g. [1,2,10]
  The items are numbers that correspond to the recipe/s clicked.
  Each recipe has a corresponding number e.g. Curry Puffs 1, Seafood Spring Roll 2 etc

3. Iterate through this array and set active class to the corresponding DOM recipe elements



*/

// const showEmptyText = () => {
//   // should return a live list
//   // problem is, even after clicking hide,
//   // still shows active class, still sees it in the dom
//   const recipesActive = document.getElementsByClassName("recipe-single active");
//   // console.log(recipesActive.length);
//   const emptyList = document.getElementsByClassName(".empty-list");
//   if (recipesActive.length < 0) {
//     emptyList.classList.add("active");
//   }
// };

// clear all my local saved data
// localStorage.clear();
