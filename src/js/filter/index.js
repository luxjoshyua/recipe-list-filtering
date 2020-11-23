// get the 6 meal types
const mealBtns = document.querySelectorAll(".filter-types .filter-item");
// get the 5 dietary types
const dietTypes = document.querySelectorAll(".filter-dietary .filter-item");
// select all the recipes on page
const recipes = document.querySelectorAll(".recipe-single");
// select the number data attribute of the recipe
// let recipeNumber;

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

const setRecipesStorage = () => {
    const savedRecipeList = document.querySelector(".saved-recipe-list");
    // initialise empty array we're going to push our recipe numbers into
    const numArray = [];
    recipes.forEach((recipe) => {
        // assign the recipe number to globally defined variable
        // this just assigns the recipe number of 19, it gets the last recipe number
        // recipeNumber = recipe.getAttribute("data-id");

        const saveRecipe = recipe.querySelectorAll(".save-recipe");
        // // if it exists on the page
        if (saveRecipe) {
            saveRecipe.forEach((btn) => {
                btn.addEventListener("click", () => {
                    // add a class to the saved recipe so you can see it has been clicked
                    recipe.classList.add("savedToStorage");
                    // get the num for the recipe clicked
                    const numToSave = recipe.getAttribute("data-id");
                    // push that number into my empty array
                    numArray.push(numToSave);
                    // then save the array to localStorage
                    localStorage.setItem("recipeNumber", numArray);
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
            // savedRecipe.innerHTML = localStorage.getItem("savedRecipe");
            savedRecipe.classList.add("active", "saved");
            savedRecipe.querySelector(".recipe-close");
            savedRecipe.addEventListener("click", () => {
                savedRecipe.classList.remove("active", "saved");
                // localStorage.removeItem("savedRecipe");
            });
        });
    }
};

setRecipesStorage();

// show the saved recipes in local storage on load
const getSavedRecipesArray = () => {
    // get my saved numbers
    const savedNum = localStorage.getItem("recipeNumber");
    // check if saved number/s, otherwise console throws error
    if (savedNum) {
        // convert into array
        let savedNumArray = Array.from(savedNum);
        // setup clean array because we need to clean savedNumArr (["1", ",", "3" etc])
        const cleanNumArr = [];
        // loop through array, just get numbers, remove commas
        for (let index = 0; index < savedNumArray.length; index++) {
            const num = savedNumArray[index];
            if (num !== ",") {
                // index is a string, convert to integer
                cleanNumArr.push(+num);
            }
        }

        // I need to match the numbers within this array to the recipe numbers
        // but how to do without loop within the recipes forEach loop?
        console.log(
            "These are my saved local storage array numbers",
            cleanNumArr
        );

        recipes.forEach((recipe) => {
            const recipeNumber = recipe.getAttribute("data-id");
            console.log(
                `This recipe has this individual ${recipeNumber} data-id number`
            );
            for (let i = 0; i < cleanNumArr.length; i++) {
                const num = cleanNumArr[i];
                // I need to match the numbers now but it gets into this
                // fucked loop in loop shit
                if (recipeNumber === num) {
                    console.log(
                        "add active class to recipe dom object on page two"
                    );
                }
            }
        });
    }
};

getSavedRecipesArray();

// function to check if on page two
// window.pageTwoCheck = () => {
//     const check = false;
//     if (document.location.pathname === "/") {
//         check = true;
//     }
//     return check;
// };

// call the function, run my getSavedRecipes func when it's working inside here
// if (window.pageTwoCheck()) {
//     console.log("we're on home page");
//     // getSavedRecipesArray()
// }

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

// clear all my local saved data for testing purposes
// localStorage.clear();
