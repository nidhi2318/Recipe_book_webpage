document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const recipes = document.querySelectorAll('.recipe-card');

    recipes.forEach(recipe => {
        const title = recipe.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            recipe.style.display = 'block';
        } else {
            recipe.style.display = 'none';
        }
    });
});
