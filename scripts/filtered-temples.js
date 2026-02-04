document.getElementById("lastModified").textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Benin City Nigeria",
    location: "16 Commercial Avenue Benin City Nigeria",
    dedicated: "5 April 2020",
    area: 52,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/benin-city-nigeria-temple/benin-city-nigeria-temple-58575-main.jpg",
  },
  {
    templeName: "Johannesburg South Africa",
    location: " 7 Jubilee Rd, Parktown, Johannesburg  2193",
    dedicated: " 24–25 August 1985",
    area: 0o11,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  }
];

createTempleCard();

function createTempleCard() {
  temples.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("temple-card"); 

    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}




function filterTemples(criteria) {
  document.querySelector(".res-grid").innerHTML = ""; // Clear current cards

  let filtered = [];

  switch (criteria) {
    case "old":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }

  filtered.forEach((temple) => {
    let card = document.createElement("section");
    card.classList.add("temple-card");

    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".res-grid").appendChild(card);
  });
}


document.getElementById("home").addEventListener("click", () => filterTemples("home"));
document.getElementById("old").addEventListener("click", () => filterTemples("old"));
document.getElementById("new").addEventListener("click", () => filterTemples("new"));
document.getElementById("large").addEventListener("click", () => filterTemples("large"));
document.getElementById("small").addEventListener("click", () => filterTemples("small"));

filterTemples("home");



// function createTempleCard() {
//   temples.forEach((temple) => {
//     let card = document.createElement("section");
//     let name = document.createElement("h3");
//     let location = document.createElement("p");
//     let dedication = document.createElement("p");
//     let area = document.createElement("p");
//     let img = document.createElement("img");

//     name.textContent = temple.templeName;
//     location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
//     dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
//     area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
//     img.setAttribute("src", temple.imageUrl);
//     img.setAttribute("alt", `${temple.templeName} Temple`);
//     img.setAttribute("loading", "lazy");

//     card.appendChild(name);
//     card.appendChild(location);
//     card.appendChild(dedication);
//     card.appendChild(area);
//     card.appendChild(img);

//     document.querySelector(".res-grid").appendChild(card);
//   });
// }








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