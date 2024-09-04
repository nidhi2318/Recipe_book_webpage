document.getElementById('add-recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;
    const image = document.getElementById('image').value;

    // Validate inputs
    if (!name || !ingredients || !instructions || !image) {
        alert('Please fill out all fields.');
        return;
    }

    // Create new recipe element
    const recipeList = document.getElementById('recipe-list');
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        <p><strong>Ingredients:</strong> ${ingredients}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
    `;

    // Append the new recipe to the recipe list
    recipeList.appendChild(recipeCard);

    // Clear the form
    document.getElementById('add-recipe-form').reset();
});
