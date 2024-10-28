const searchButton = document.querySelector('.button_search');
const searchInput = document.getElementById('inp_search');

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('visible');
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides[currentIndex].classList.add('active');
    currentIndex = index % slides.length; 
    slides[currentIndex].classList.remove('active');
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000); 
