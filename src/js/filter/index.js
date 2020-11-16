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

// use localStorage to filter through the recipeNames array

// on the first page
window.onload = () => {
  const currentMeal = localStorage.getItem("activeMeal");
  const currentDiet = localStorage.getItem("activeDiet");
  const savedRecipeList = document.querySelector(".saved-recipe-list");

  recipes.forEach((recipe) => {
    // if user has checked both layers of filter, show both

    const saveRecipe = recipe.querySelector(".save-recipe");
    if (saveRecipe) {
      saveRecipe.addEventListener("click", (e) => {
        recipe.classList.add("test");

        // now need to save this recipe to local storage so I can get it on page two
        localStorage.setItem("savedRecipe", "test");
      });
    }

    // get the saved string
    const savedRecipe = localStorage.getItem("savedRecipe");
    console.log(savedRecipe); // this returns null
    // if (recipe.classList.contains("test")) {

    //   recipe.classList.add("active", "saved");
    // }

    // if (
    //   recipe.classList.contains(currentMeal) &&
    //   recipe.classList.contains(currentDiet)
    // ) {
    //   recipe.classList.add("active", "saved");

    //   // get the close icon for the specific recipe
    //   const hideRecipe = recipe.querySelector(".recipe-close");
    //   // check it exists in the dom
    //   // if (hideRecipe) {
    //   //   // show if yes
    //   //   hideRecipe.classList.add("active");
    //   //   // add an event listener to it
    //   //   hideRecipe.addEventListener("click", (e) => {
    //   //     recipe.classList.remove("active", "saved");
    //   //     // recipe.remove();
    //   //     // showEmptyText();
    //   //   });
    //   // }
    //   // show the saved recipe list text
    if (savedRecipeList) {
      savedRecipeList.classList.add("active");
    }
    // }
  });
};

// when the page first loads, it renders the html content again
// so they're always showing the recipes even when you've said hide them

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
