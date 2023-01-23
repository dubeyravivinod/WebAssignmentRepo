const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealsEl = document.getElementById('meals'),
    single_mealEl = document.getElementById('single-meal'),
    resultHeading = document.getElementById('result-heading');

async function getRandomMeal() {
    mealsEl.innerHTML = " ";
    resultHeading.innerHTML = " ";
    const random_data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const json_data = await random_data.json()
    const meal = json_data.meals[0]
    // console.log(meal);
    addMealToDOM(meal)

}

async function searchMeal(e) {
    e.preventDefault();

    single_mealEl.innerHTML = '';

    const term = search.value;

    if(term.trim()) {
        const response_data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        const json_data = await response_data.json();
        // console.log(json_data);

        resultHeading.innerHTML = `<h2>Search results for '${term}' :</h2>`;

        if (json_data.meals == null) {
            resultHeading.innerHTML = `<h2>No results, try again !</h2>`;
        }
        else {
            mealsEl.innerHTML = json_data.meals.map ( meal => 
                    `
                    <div class="meal">
                      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                      <div class="meal-info" data-mealID="${meal.idMeal}">  
                      <h3>${meal.strMeal}</h3>
                      </div>
                    </div>
                    `
                )
        }

        search.value = " ";
    }
    else {
        alert("Meal can't be blank");
    }
}

async function getMealByID(mealID) {

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    const json_data = await response.json();
    const meal = json_data.meals[0];
    addMealToDOM(meal);

}

function addMealToDOM(meal) {

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }

        else
            break;
    }

    single_mealEl.innerHTML =
        `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="single-meal-info">
                ${meal.strCategory ? ` <p>Category: ${meal.strCategory}</p> ` : ''}
                ${meal.strArea ? ` <p>Dish type: ${meal.strArea}</p> ` : ''}
            </div>
        

        <div class="main">
            <p>${meal.strInstructions}</p>
            <h2>Ingredients</h2>
            <ul>
                ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        </div>
    `

}

// Event listeners

submit.addEventListener('submit', searchMeal);

mealsEl.addEventListener('click', e => {

    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        }
        else {
            return false;

        }
    });

    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealID');
        getMealByID(mealID);
    }
});
random.addEventListener('click', getRandomMeal);
