

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-indicators');
    const dots = [];

    // Create and append dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dotsContainer.appendChild(dot);
        dots.push(dot);

        // Dot click sets slide
        dot.addEventListener('click', () => {
            showSlides(index + 1);
        });
    });

    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/Previous controls
    document.querySelector('.prev').addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    function showSlides(n) {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        // Hide all slides and deactivate all dots
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.className = 'dot');

        // Display the current slide and activate the dot
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
    }
});