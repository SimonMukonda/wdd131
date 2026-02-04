document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});








// Show last modified date
// document.getElementById("lastModified").textContent = document.lastModified;

// // Hamburger toggle
// const mainnav = document.querySelector('.navigation');
// const hambutton = document.querySelector('#menu');

// hambutton.addEventListener('click', (e) => {
// e.preventDefault();
// mainnav.classList.toggle('show');
// hambutton.classList.toggle('show');
// });