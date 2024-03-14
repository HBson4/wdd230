const url = './data/members.json';

async function fetchDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  displayDirectory(data);
}

function displayDirectory(data) {
  console.log(data);
};