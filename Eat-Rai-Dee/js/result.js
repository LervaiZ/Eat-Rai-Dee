$(document).ready(function() {
    // Retrieve selected ingredients from localStorage
    const selectedIngredients = JSON.parse(localStorage.getItem("selectedIngredients"));

    if (selectedIngredients) {
        const resultContainer = $("#resultContainer");

        // Dummy recipe data (you can replace this with your actual data)
        const recipes = [
            { name: "Recipe 1", image: "recipe1.jfif", ingredients: ["ingredient1", "ingredient2"], websiteUrl: "https://example.com/recipe1" },
            { name: "Recipe 2", image: "recipe2.jpg", ingredients: ["ingredient1"], websiteUrl: "https://example.com/recipe2" },
            { name: "Recipe 3", image: "recipe3.jpg", ingredients: ["ingredient2"], websiteUrl: "https://example.com/recipe3" },
        ];

        // Filter recipes based on selected ingredients
        const filteredRecipes = recipes.filter(function(recipe) {
            return selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
        });

        // Display the filtered recipes in cards with clickable names
        filteredRecipes.forEach(function(recipe) {
            const recipeCard = $("<div>").addClass("recipe-card");
            const recipeImage = $("<img>").attr("src", recipe.image);

            // Create a clickable link for the recipe name
            const recipeLink = $("<a>").attr("href", recipe.websiteUrl).attr("target", "_blank").text(recipe.name);
            
            recipeCard.append(recipeImage, recipeLink);
            resultContainer.append(recipeCard);
        });
    } else {
        // Handle the case where no ingredients were selected
        $("#resultContainer").html("<p>No ingredients selected.</p>");
    }
});
