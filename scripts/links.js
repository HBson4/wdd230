const baseURL = "https://hbson4.github.io/wdd230/";
const linksURL = "https://hbson4.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data);
  }
  
  getLinks();
  