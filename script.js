const links = document.querySelector('.fav-articles');
const linksArr = links.children;
for(let i = 0; i < linksArr.length; i++){
    let linkHref = prompt(`Введіть сайт для ${i+1} посилання`);
    linksArr[i].href = `https://${linkHref}`;
    linksArr[i].textContent = `${linkHref}`;
}
console.log(linksArr);

let pageColor = prompt('Введіть фон для сторінки');
document.body.style.backgroundColor = pageColor;
let fontStyle = prompt('Введіть тип шрифту');
document.body.style.fontStyle = fontStyle;
let hOneAlign = prompt('Введіть Text-Align для заголовку');
const hOne = document.querySelector('.main-title');
hOne.style.textAlign = hOneAlign;
let linksBackgroundColor = prompt('Введіть фон для абзацу з посиланнями');
links.style.backgroundColor = linksBackgroundColor;
let linksTextColor = prompt('Введіть колір тексту для абзацу з посиланнями');
links.style.color = linksTextColor;
for (let i = 0; i < linksArr.length; i++){
    let linkColor = prompt(`Введіть колір тексту для ${i+1} посилання`);
    linksArr[i].style.color = linkColor;
}
const divArticle = document.querySelector('.list-articles');
let divTextColor = prompt('Введіть колір тексту для абзацу зі списком змін');
let divTextSize = prompt('Введіть розмір тексту для абзацу зі списком змін');
let divTextWeight = prompt('Введіть товщину тексту для абзацу зі списком змін');
divArticle.style.color = divTextColor;
divArticle.style.fontSize = divTextSize;
divArticle.style.fontWeight = divTextWeight;
const list = document.querySelector('.list');
let listMarker = prompt('Введіть маркер для списку змін')
list.style.listStyleType = listMarker;
