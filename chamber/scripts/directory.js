const url = './data/members.json';

async function fetchDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  displayDirectory(data);
}

function displayDirectory(data) {
  const directory = document.querySelector('#directory-info');
  directory.classList.add('grid');

  data.forEach((member) => {
    const card = `
      <section class="card">
        <img src="${member.image.hyperlink}" alt="${member.name} logo">
        <h4>${member.name}</h4>
        <p>${member.address}</p>
        <p>${member.phoneNumber}</p>
        <a href="${member.websiteUrl}">Website</a>
        <p>${member.membershipLvl.toUpperCase()}</p>
      </section>
      `;
      directory.insertAdjacentHTML('beforeend', card);
  });
};

fetchDirectoryData();

const cardBtn = document.querySelector('#cardBtn');
const listBtn = document.querySelector('#listBtn');

cardBtn.addEventListener('click', () => {
  const sections = document.querySelectorAll('.list');
  const directory = document.querySelector('#directory-info');

  sections.forEach(section => {
    section.classList.add('card');
    directory.classList.add('grid');
    section.classList.remove('list');
  });
});

listBtn.addEventListener('click', () => {
  const sections = document.querySelectorAll('.card');
  const directory = document.querySelector('#directory-info');

  sections.forEach(section => {
    section.classList.add('list');
    directory.classList.remove('grid');
    section.classList.remove('card');
  });
});
