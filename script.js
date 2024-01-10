document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.style.backgroundColor = '#555'; 
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();

        var targetSection = document.querySelector(event.target.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});
