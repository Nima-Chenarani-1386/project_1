// definde variables 
const theme_toggle_button = document.getElementById('theme__toggle'); 
const body = document.body;

// Click functions
theme_toggle_button.addEventListener('click', () => {
    document.body.classList.toggle('dark__mode')
}); 
