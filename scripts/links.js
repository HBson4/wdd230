const baseURL = "http://127.0.0.1:5500/index.html";
const linksURL = "http://127.0.0.1:5500/data/links.json";

// const baseURL = "https://hbson4.github.io/wdd230/";
// const linksURL = "https://hbson4.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
}
  
getLinks();

// function displayLinks(data) {
//     const ul = document.querySelector("#weeks");

//     data.weeks.forEach(week => {
//         const li = document.createElement("li");
//         li.innerHTML = `${week.week}: `;

//         data.forEach(link => {
//             const a = document.createElement("a");

//             a.setAttribute("href", link.url);
//             a.textContent = link.title;

//             li.appendChild(a);
//         });
//         ul.appendChild(li);
//     });
// }

function displayLinks(weeks) {
    const weeksUl = document.getElementById("weeks");

    weeks.weeks.forEach(week => {
        const li = document.createElement("li");
        const weekTitle = document.createElement("p");

        weekTitle.textContent = `${week.week}: `;
        li.appendChild(weekTitle);

        week.links.forEach(link => {
            const a = document.createElement("a");

            a.setAttribute("href", link.url);
            a.textContent = link.title;

            li.appendChild(a);
        });
        weeksUl.appendChild(li);
    });
}