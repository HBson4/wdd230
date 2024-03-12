const baseURL = "https://hbson4.github.io/wdd230/";
const linksURL = "https://hbson4.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
  
getLinks();

function displayLinks(weeks) {
    const weeksUl = document.getElementById("weeks");

    weeks.weeks.forEach(week => {
        const li = document.createElement("li");
        const weekTitle = document.createElement("p");

        weekTitle.textContent = `${week.week}: `;
        li.appendChild(weekTitle);

        week.links.forEach(link => {
            const a = document.createElement("a");
            const bar = document.createTextNode("|");

            a.setAttribute("href", link.url);
            a.textContent = link.title;

            li.appendChild(bar);
            li.appendChild(a);
        });
        weeksUl.appendChild(li);
    });
}