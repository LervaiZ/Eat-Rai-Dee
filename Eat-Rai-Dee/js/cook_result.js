$(document).ready(function() {
  // Retrieve selected ingredients from localStorage
  let selectedIngredients = JSON.parse(localStorage.getItem("selectedIngredients")); // Change const to let

  if (selectedIngredients) {
      const resultContainer = $("#resultContainer");

      // Dummy recipe data (you can replace this with your actual data)
      const recipes = [
        {
          name: "Three Flavoured Deep-fried Fish",
          image: "images/menu/1ปลาทอดราดพริก.jpg",
          ingredients: [
            "Tilapia", 
            "Garlic", 
            "Chili", 
            "Coriander"
         ],
          websiteUrl: "1ปลาทอดราดพริก.html",
        },
        {
          name: "Steamed Prawns with Vermicelli",
          image: "images/menu/2กุ้งอบวุ้นเส้น.jpg",
          ingredients: [
            "Shrimp",
            "Pork Belly",
            "Spring Onion",
            "Celery",
            "Ginger",
            "Garlic",
            "Ground Pepper",
            "Coriander Root"
          ],
          websiteUrl: "2กุ้งอบวุ้นเส้น.html",
        },
        {
          name: "Catfish in Fermented Fish Broth",
          image: "images/menu/4หลนปลาร้า.jpg",
          ingredients: [
            "Cat Fish",
            "Lemongrass",
            "Shallot",
            "Galangal",
            "Finger Root",
            "Chili",
            "Kaffir Lime Leaves",
            "Bamboo Shoot",
            "Long Beans"
          ],
          websiteUrl: "4หลนปลาร้า.html",
        },
        {
          name: "Stir-fried Crispy Catfish in Curry Paste",
          image: "images/menu/3ปลาดุกผัดพริกขิง.jpg",
          ingredients: ["Chili", "Cat Fish", "Red Curry Paste", "Kaffir Lime Leaves"],
          websiteUrl: "3ปลาดุกผัดพริกขิง.html",
        },
        {
          name: "Shrimp Paste Dip",
          image: "images/menu/5น้ำพริกกะปิ.jpg",
          ingredients: ["Shrimp Paste", "Garlic", "Eggplant", "Chili"],
          websiteUrl: "5น้ำพริกกะปิ.html",
        },
        {
          name: "Thepho curry",
          image: "images/menu/6เเกงเทโพ.jpg",
          ingredients: ["Morning Glory", "Pork Belly", "Leech Lim", "Chili", "Red Curry Paste", "Kaffir Lime Leaves", "Kaffir Lime Zest"],
          websiteUrl: "6เเกงเทโพ.html",
        },
        {
          name: "Thai Chicken Coconut Soup",
          image: "images/menu/7ต้มข่าไก่.jpg",
          ingredients: [
            "Chicken",
            "Mushrooms",
            "Galangal",
            "Lemongrass",
            "Shallot",
            "Chili",
            "Kaffir Lime Leaves",
            "Coriander",
            "Thai Coriander"
          ],
          websiteUrl: "7ต้มข่าไก่.html",
        },
        {
          name: "Fried Fish with Fish Sauce",
          image: "images/menu/8ปลาทอดราดน้ำปลา.jpg",
          ingredients: ["Sea Bass"],
          websiteUrl: "8ปลาทอดราดน้ำปลา.html",
        },
        {
          name: "Spicy Minced Pork Salad",
          image: "images/menu/9ลาบหมู.jpg",
          ingredients: [
            "Pork",
            "Pork Skin",
            "Pork Liver",
            "Shallot",
            "Spring Onion",
            "Coriander"
          ],
          websiteUrl: "9ลาบหมู.html",
        },
        {
          name: "Stir-fried Mackerel with Chili and Salt",
          image: "images/menu/10ปลาทูผัดพริกเกลือ.jpg",
          ingredients: ["Mackerel", "Garlic", "Chili", "Spring Onion"],
          websiteUrl: "10ปลาทูผัดพริกเกลือ.html",
        },
        {
          name: "Fried River Prawns with Salt",
          image: "images/menu/11กุ้งทอดเกลือ.jpg",
          ingredients: ["Shrimp", "Garlic"],
          websiteUrl: "11กุ้งทอดเกลือ.html",
        },
        {
          name: "Minced Pork Tom Yum",
          image: "images/menu/12หมูสับต้มยำ.jpg",
          ingredients: [
            "Pork",
            "Pork Meatballs",
            "Garlic",
            "Peanuts",
            "Spring Onion",
            "Coriander"
          ],
          websiteUrl: "12หมูสับต้มยำ.html",
        },
        {
          name: "Grilled Mackerel Chili Dip",
          image: "images/menu/13น้ำพริกปลาทู.jpg",
          ingredients: ["Mackerel", "Garlic", "Shallot", "Chili", "Coriander"],
          websiteUrl: "13น้ำพริกปลาทู.html",
        },
        {
          name: "Fried Egg with Climbing Wattle",
          image: "images/menu/14ไข่ชะอม.jpg",
          ingredients: ["Climbing Wattle", "Egg"],
          websiteUrl: "14ไข่ชะอม.html",
        },
        {
          name: "Steamed Sea Bass with Soy Sauce",
          image: "images/menu/15ปลากะพงนึ่งซีอิ๊ว.jpg",
          ingredients: [
            "Sea bass",
            "Ginger",
            "Spring Onions",
            "Celery",
            "Chili"
          ],
          websiteUrl: "15ปลากระพงนึ่งซีอิ้ว.html",
        },
        {
          name: "Fried Red Tilapia Fish with Lemongrass Salad",
          image: "images/menu/16ปลาทับทิมยำ.jpg",
          ingredients: [
            "Red Tilapia Fish",
            "Lemongrass",
            "Shallot",
            "Ginger",
            "Lemon",
            "Mint Leaves",
            "Cashew Nuts",
            "Chili"
          ],
          websiteUrl: "16ปลาทับทิมยำ.html",
        },
        {
          name: "Fried Shrimp with Tamarind Sauce",
          image: "images/menu/17กุ้งทอดซอสมะขาม.jpg",
          ingredients: ["Shrimp", "Garlic", "Shallot", "Coriander"],
          websiteUrl: "17กุ้งทอดซอสมะขาม.html",
        },
        {
          name: "Crispy Pork with Chinese Broccoli and Oyster Sauce",
          image: "images/menu/18คะน้าหมูกรอบ.jpg",
          ingredients: ["Chinese Broccoli", "Crispy Pork", "Chili", "Garlic"],
          websiteUrl: "18คะน้าหมูกรอบ.html",
        },
        {
          name: "Fried Crab in Yellow Curry",
          image: "images/menu/19ปูผัดผงกระหรี่.jpg",
          ingredients: [
            "Blue Crab",
            "Garlic",
            "Eggs",
            "Onion",
            "Celery",
            "Spring Onions",
            "Chili",
            "Curry Powder"
          ],
          websiteUrl: "19ปูผัดผงกะหรี่.html",
        },
        {
          name: "Stir-fried Stink Bean and Prawn",
          image: "images/menu/20กุ้งผัดสะตอ.jpg",
          ingredients: [
            "Stink Bean",
            "Shrimp",
            "Kaffir Lime Leaves",
            "Red Pepper",
            "Garlic",
            "Shallot",
            "Shrimp Paste"
          ],
          websiteUrl: "20กุ้งผัดสะตอ.html",
        },
        {
          name: "Salted Beef in Coconut Milk",
          image: "images/menu/21เนื้อเค็มต้มกระทิ.jpg",
          ingredients: [
            "Sun-dried beef",
            "Shallot",
            "Chili",
            "Galangal",
            "Kaffir Lime Leaves"
          ],
          websiteUrl: "21เนื้อเค็มต้มกระทิ.html",
        },
        {
          name: "Stir-fried Malindjo Leaves with Egg",
          image: "images/menu/22ใบเหลียงผัดไข่.jpeg",
          ingredients: ["Malindjo Leaves", "Garlic", "Eggs"],
          websiteUrl: "22ใบเหลียงผัดไข่.html",
        },
        {
          name: "Stir-fried Clams with Chilli Paste",
          image: "images/menu/23หอยลายผัดน้ำพริกเผา.jpg",
          ingredients: [
            "Clams",
            "Garlic",
            "Chili Paste",
            "Chili",
            "Basil"
          ],
          websiteUrl: "23หอยลายผัดน้ำพริกเผา.html",
        },
        {
          name: "Rice Noodles with Tuna Curry",
          image: "images/menu/24ขนมจีนน้ำยาปลาทูน่า.jpg",
          ingredients: [
            "Red Curry Paste",
            "Tuna",
            "Galangal",
            "Fish Balls",
            "Chili",
            "Bean Sprout",
            "Long Beans"
          ],
          websiteUrl: "24ขนมจีนน้ำยาปลาทูน่า.html",
        },
        {
          name: "Chicken Green Curry",
          image: "images/menu/25แกงเขียวหวานไก่.jpg",
          ingredients: [
            "Ground Pepper",
            "Chili",
            "Galangal",
            "Lemongrass",
            "Kaffir Lime Zest",
            "Coriander Root",
            "Shallot",
            "Garlic",
            "Shrimp Paste",
            "Green Curry Paste"
          ],
          websiteUrl: "25แกงเขียวหวานไก่.html",
        },
        {
          name: "Stir-fried Squid with Salted Egg",
          image: "images/menu/26หมึกผัดไข่เค็ม.jpg",
          ingredients: [
            "Coriander Root",
            "Garlic",
            "Ground Pepper",
            "Squid",
            "Eggs",
            "Onion",
            "Chili",
            "Coriander"
          ],
          websiteUrl: "26หมึกผัดกะทิไข่เค็ม.html",
        },
        {
          name: "Stir-fried Pork and Omelet with Chilli and Holy Basil",
          image: "images/menu/27ไข่เจียวกะเพราหมูสับ.jpg",
          ingredients: ["Eggs", "Pork", "Garlic", "Chili", "Basil"],
          websiteUrl: "27ไข่เจียวกะเพราหมูสับ.html",
        },
        {
          name: "Pork Porridge",
          image: "images/menu/28โจ๊กหมู.jpg",
          ingredients: [
            "Rice",
            "Coriander Roots",
            "Pork",
            "Eggs",
            "Ginger",
            "Spring Onions",
            "Ground Pepper",
            "Garlic"
          ],
          websiteUrl: "28โจ๊กหมู.html",
        },
        {
          name: "Lotus Stem with Steamed Mackerel in Coconut Soup",
          image: "images/menu/29แกงกะทิสายบัวปลาทู.jpg",
          ingredients: [
            "Lotus Stem",
            "Mackerel",
            "1 tablespoon coconut sugar",
            "Shrimp Paste",
            "Shallots",
            "Ground Pepper",
            "Chili"
          ],
          websiteUrl: "29แกงกะทิสายบัวปลาทู.html",
        },
        {
          name: "Mackerel in Dried Red Curry",
          image: "images/menu/30ฉู่ฉี่ปลาทู.jpg",
          ingredients: ["Mackerel", "Red Curry Paste", "Chili", "Kaffir Lime Leaves"],
          websiteUrl: "30ฉู่ฉี่ปลาทู.html",
        },
      ];

      // Function to display all recipes
      function displayAllRecipes() {
        resultContainer.empty(); // Clear the result container

        recipes.forEach(function(recipe) {
          const recipeCard = $("<div>").addClass("recipe-card");
          const recipeImage = $("<img>").attr("src", recipe.image);

          // Create a clickable link for the recipe name
          const recipeLink = $("<a>")
              .attr("href", recipe.websiteUrl)
              .attr("target", "_blank")
              .text(recipe.name);

          recipeCard.append(recipeImage, recipeLink);
          resultContainer.append(recipeCard);
        });
      }

      // Filter recipes based on selected ingredients
      const filteredRecipes = recipes.filter(function(recipe) {
          return selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
      });

      if (filteredRecipes.length > 0) {
          // Display the filtered recipes in cards with clickable names
          filteredRecipes.forEach(function(recipe) {
              const recipeCard = $("<div>").addClass("recipe-card");
              const recipeImage = $("<img>").attr("src", recipe.image);

              // Create a clickable link for the recipe name
              const recipeLink = $("<a>")
                  .attr("href", recipe.websiteUrl)
                  .attr("target", "_self")
                  .text(recipe.name);

              recipeCard.append(recipeImage, recipeLink);
              resultContainer.append(recipeCard);
          });
      } else {
          // Handle the case where no recipes match the selected ingredients
          resultContainer.html("<p>No menu available</p>");
      }
      
      // Function to clear the filter and display all recipes
      function clearFilter() {
        selectedIngredients = []; // Clear the selectedIngredients array
      
        // Clear the ingredient selection controls (e.g., checkboxes)
        // You'll need to implement this part based on how you handle ingredient selection.
      
        // Remove data from local storage
        localStorage.removeItem("selectedIngredients");
      
        // Re-display all recipes
        displayAllRecipes();
      }

      // Attach a click event handler to the "Clear Filter" button
      $("#hover-button").click(function() {
          clearFilter(); // Call the function to clear the filter
      });
  } else {
      // Handle the case where no ingredients were selected
      $("#resultContainer").html("<p>No ingredients selected.</p>");
  }
});