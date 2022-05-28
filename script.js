const main = document.querySelector('body'),
    refBlock = main.querySelector('p'),
    refs = refBlock.querySelectorAll('a'),
    title = main.querySelector('h1'),
    mainText = main.querySelector('div'),
    list = mainText.querySelector('ul');


let background = prompt('Введіть через кому колір фону сторінки і параграфа з посиланнями', '#FAEBD7, #D3D3D3').split(', '),
    fontFamily = prompt('Введіть бажаний тип шрифта', 'monospace'),
    textAlign = prompt('Введіть бажане вирівнювання заголовку', 'center'),
    refColor = prompt('Введіть бажаний колір посилань', '#A52A2A'),
    mainTextStyle = prompt('Введіть через кому колір, розмір, товщину основного тексту', '#663399, 18px, thin').split(', '),
    markerStyle = prompt('Введіть бажаний тип маркера для списку', 'square'),

    webpages = prompt('Введіть 3 посилання через кому', 'www.youtube.com/watch?v=dQw4w9WgXcQ, www.codewars.com, uk.javascript.info').split(', ');

main.style.backgroundColor = background[0];
main.style.fontFamily = fontFamily;
refBlock.style.backgroundColor = background[1];
title.style.textAlign = textAlign;

refs.forEach((ref) => {
    ref.style.color = refColor;
});

mainText.style.color = mainTextStyle[0];
mainText.style.fontSize = mainTextStyle[1];
mainText.style.fontWeight = mainTextStyle[2];

list.style.listStyleType = markerStyle;

refs.forEach((ref, i) => {
    ref.innerHTML = `${webpages[i]} <br>`;
    ref.href = `https://${webpages[i]}`;
});

