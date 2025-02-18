
function showMysteryFood(foodId) {
    console.log("function running...")
    const foodImage = document.getElementById('foodImage');
    switch (foodId) {
        case 'food1':
            foodImage.src = 'https://easychickenrecipes.com/wp-content/uploads/2021/04/fried-chicken-tenders-recipe-3.jpg';
            foodImage.alt = 'Chicken Tenders';
            break;
        case 'food2':
            foodImage.src = 'https://www.recipemagik.com/wp-content/uploads/2021/02/Sweet-Chili-Chicken-Recipe-6.jpg';
            foodImage.alt = 'Sweet Chilli Chicken';
            break;
        default:
            foodImage.src = 'https://media1.tenor.com/images/fcfcbf4a9d5669e5338c1a06984b58b4/tenor.gif?itemid=11569617';
            foodImage.alt = 'Dunder Mifflin';
    }
}
