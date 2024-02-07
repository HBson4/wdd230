// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');


// button.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     const value =  input.value;
//     if (value) {
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';

//         deleteButton.addEventListener('click', () => {
//             list.removeChild(li)
//             input.focus();
//         })

//         li.appendChild(deleteButton);
//         list.appendChild(li)

//         input.value = '';
//         input.focus();
//     }

//     input.focus();
// });

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deletebutton = document.createElement('button');

    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    input.focus();
}

function setChapterList() {
    localStorage.setItem('bomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('bomList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}