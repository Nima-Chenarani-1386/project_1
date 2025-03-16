// definde variables 
const theme_toggle_button = document.getElementById('theme__toggle');
const body = document.body;
const navbar = document.querySelector("#navbar");

// Click functions
theme_toggle_button.addEventListener('click', () => {
    document.body.classList.toggle('dark__mode')
});

// Scroll functions
window.addEventListener('scroll', () => {
    if (window.scrollY >= 10) {
        navbar.classList.add('fixed'); 
        
    } else {
        navbar.classList.remove('fixed'); 
    }
}); 
