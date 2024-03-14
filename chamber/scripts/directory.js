const url = './data/members.json';

async function fetchDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  displayDirectory(data);
}

fetchDirectoryData();

function displayDirectory(data) {
  const directory = document.querySelector('main');

  for (const member of data) {
    const section = document.createElement('section');

    const image = document.createElement('img');
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `${member.name} logo`);

    const name = document.createElement('p');
    name.textContent = member.name;

    const address = document.createElement('p');
    address.textContent = member.address;

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = member.phoneNumber;

    const websiteUrl = document.createElement('a');
    websiteUrl.setAttribute('href', member.websiteUrl);
    websiteUrl.textContent = 'Website';

    const membershipLvl = document.createElement('p');
    membershipLvl.textContent = member.membershipLvl;

    section.appendChild(image);
    section.appendChild(name);
    section.appendChild(address);
    section.appendChild(phoneNumber);
    section.appendChild(websiteUrl);
    section.appendChild(membershipLvl);

    directory.appendChild(section);
    };
};

