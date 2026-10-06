const API_KEY="sk_live_"; // for testing, need the api key to use
const BASE_API_URL= "https://recipeapi.io/api/v1";

async function searchRecipes(cuisine, meal_type, difficulty) {
    //the endpoint required us to provide search terms 
    const response = await axios.get(`${BASE_API_URL}/recipes`, {
        param: {
            "cuisine": cuisine,
            //"meal_type": "starter"
            "meal_type": meal_type,
            "difficulty": difficulty
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });    
    console.log(response.data);
    return response.data;
}

document.querySelector("#searchBtn").addEventListener("click", async function(){
    const name = document.querySelector("#name").value;
    const mealType = document.querySelector("#mealType").value;
    const difficulty = document.querySelector("#difficulty").value;
    const recipes = await searchRecipes(name, mealType, difficulty);
    console.log(recipes);
})