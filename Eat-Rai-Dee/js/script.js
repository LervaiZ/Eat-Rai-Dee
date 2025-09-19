$(document).ready(function() {
    $("#searchButton").on("click", function() {
        const selectedIngredients = [];
        $(".ingredientCheckbox:checked").each(function() {
            selectedIngredients.push($(this).val());
        });

        // Store selected ingredients in localStorage
        localStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));

        // Redirect to the result page
        window.location.href = "cook.html";
    });
});

$(document).ready(function() {
    $("#hover-button").on("click", function() {
        const selectedIngredients = [];
        $(".ingredientCheckbox:checked").each(function() {
            selectedIngredients.push($(this).val());
        });

        // Store selected ingredients in localStorage
        localStorage.setItem("selectedIngredients", JSON.stringify(selectedIngredients));

        // Redirect to the result page
        window.location.href = "cook.html";
    });
});



