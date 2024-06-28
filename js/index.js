
const sun = document.querySelector('.gg-sun');
const moon = document.querySelector('.gg-moon');
const body = document.querySelector('body');

sun.addEventListener('click', function () {
    this.classList.toggle('active');
    moon.classList.toggle('active');
    body.classList.toggle('bg-dark');
});
moon.addEventListener('click', function () {
    sun.classList.toggle('active');
    this.classList.toggle('active');
    body.classList.toggle('bg-dark');
});


