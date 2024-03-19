const url = './data/members.json';

async function fetchDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  displayDirectory(data);
}

fetchDirectoryData();

function displayDirectory(data) {
  const directory = document.querySelector('#directory-info');
  directory.classList.add('gridCards');

  for (const member of data) {
    const section = document.createElement('section');
    section.classList.add('card');

    const image = document.createElement('img');
    image.setAttribute('src', member.image.hyperlink);
    image.setAttribute('alt', `${member.name} logo`);

    const name = document.createElement('h4');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = member.phoneNumber;

    const websiteUrl = document.createElement('a');
    websiteUrl.setAttribute('href', member.websiteUrl);
    websiteUrl.textContent = 'Website';

    const membershipLvl = document.createElement('p');
    membershipLvl.textContent = member.membershipLvl.toUpperCase();

    section.appendChild(image);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(phoneNumber);
    section.appendChild(websiteUrl);
    section.appendChild(membershipLvl);

    directory.appendChild(section);
  };
};

const cardBtn = document.querySelector('#cardBtn');
const listBtn = document.querySelector('#listBtn');

cardBtn.addEventListener('click', () => {
  const sections = document.querySelectorAll('.list');

  sections.forEach(section => {
    section.classList.add('card');
    section.classList.remove('list');
  });
});

listBtn.addEventListener('click', () => {
  const sections = document.querySelectorAll('.card');

  sections.forEach(section => {
    section.classList.add('list');
    section.classList.remove('card');
  });
});
