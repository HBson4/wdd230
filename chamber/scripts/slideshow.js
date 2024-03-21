const url = './data/members.json';
let companies = [];
const img1 = document.querySelector('.logo1');
const img2 = document.querySelector('.logo2');
const img3 = document.querySelector('.logo3');

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  getCompanies(data);
}

function getCompanies(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].membershipLvl === 'silver' || data[i].membershipLvl === 'gold') {
      companies.push(data[i]);
    }
  }
  companies = shuffle(companies);
  displayData(companies);
}

// Randomize array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Display first 3 company logos
function displayData(companies) {

  for (let i = 0; i < 3 && i < companies.length; i++) {
    if (i == 0) {
      img1.setAttribute('src', companies[i].image.hyperlink);
    }
    else if (i == 1) {
      img2.setAttribute('src', companies[i].image.hyperlink);
    }
    else if (i == 2) {
      img3.setAttribute('src', companies[i].image.hyperlink);
    }
  }
}

fetchData();


// IMAGE SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}