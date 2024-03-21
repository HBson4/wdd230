const url = './data/members.json';

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  getCompanies(data);
}

function getCompanies(data) {
  let silverGoldCompanies = data.filter(company => company.membershipLvl === 'silver' || company.membershipLvl === 'gold');
  let shuffledCompanies = shuffle(silverGoldCompanies);
  displayData(shuffledCompanies);
}

function displayData(companies) {
  let slideshowImages = document.querySelectorAll('.slideshow-image');
  let galleryImages = document.querySelectorAll('.gallery-image');

  // Loop over slideshow images and set their src attributes
  for (let i = 0; i < slideshowImages.length; i++) {
    slideshowImages[i].setAttribute('src', companies[i].image.hyperlink);
  }

  // Loop over gallery images and set their src attributes
  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].setAttribute('src', companies[i].image.hyperlink);
  }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
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