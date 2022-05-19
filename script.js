//колір сторінки
let colorButton = document.querySelector('.bg')
colorButton.style.width = '220px'
colorButton.style.height = '25px'
colorButton.style.fontSize = '15px'

colorButton.addEventListener('click', () => {
    changeColor();
})
function changeColor() {
    let bgColor = prompt('Фон сторінки?', 'white')
    if (bgColor) {
        document.querySelector('body').style.background = bgColor;
    }
}

//тип шрифта
let textType = document.querySelector('.text')
textType.style.width = '220px'
textType.style.height = '25px'
textType.style.fontSize = '13px'

textType.addEventListener('click', () => {
    changeText();
})
function changeText() {
    let text = prompt('Тип шрифта?', 'Times')
    if (text) {
        document.querySelector('body').style.fontFamily = text;
    }
}
//Позиція h1
let h1Pos = document.querySelector('.H1')
h1Pos.style.fontSize = '13px'
h1Pos.style.width = '220px'
h1Pos.style.height = '25px'


h1Pos.addEventListener('click', () => {
    changePosH1();
})
let h = document.querySelector('.my')
h.style.textAlign = 'left'
function changePosH1() {
    if (h.style.textAlign == 'left') {
        return h.style.textAlign = 'center'
    } else if (h.style.textAlign == 'center') {
        return h.style.textAlign = 'right'
    } else if (h.style.textAlign == 'right') {
        return h.style.textAlign = 'left'
    }
}
//фон параграф
let pColor = document.querySelector('.pColor')
pColor.style.fontSize = '13px'
pColor.style.width = '220px'
pColor.style.height = '25px'

pColor.addEventListener('click', () => {
    changePcolor()
})

function changePcolor() {
    pColor = prompt('Фон параграфу?', 'white')
    if (pColor) {
        document.querySelector('p').style.background = pColor;
        document.querySelector('p').style.width = '50%'
        document.querySelector('p').style.height = '100px'
        document.querySelector('p').style.display = 'flex'
        document.querySelector('p').style.flexDirection = 'column'
        document.querySelector('p').style.gap = '10px'
    }
}
// колір лінків
let link = document.querySelector(".aColor")

link.addEventListener('mouseover', () => {
    changeColorHttp1()
})
function changeColorHttp1() {
    link.style.color = 'orange'
    link.style.fontSize = '25px'
}
link.addEventListener('mouseout', () => {
    changeColorHttp2()
})
function changeColorHttp2() {
    link.style.color = 'blue'
    link.style.fontSize = '13px'
}



// div 
let divButton = document.querySelector('.changeDiv')
divButton.style.width = '350px'
divButton.style.height = '30px'
divButton.style.fontSize = '15px'

divButton.addEventListener('click', () => {
    changeDiv();
})

function changeDiv() {
    let divSetColor = prompt('Колір background DIV?', 'white')
    let divSetFontSize = prompt('FontSize(px)', '20')
    let divSetTextColor = prompt('Колір тексту', 'black')
    if (divSetColor) {
        document.querySelector('.main').style.background = divSetColor
    }
    if (divSetFontSize) {
        document.querySelector('.main').style.fontSize = divSetFontSize+'px'
    }
    if (divSetTextColor) {
        document.querySelector('.main').style.color = divSetTextColor
    }
    
    

   
}
/// маркер 

let changeUL = document.querySelector('.changeUL')
let ul = document.querySelector(".ul1")

changeUL.addEventListener('click', () => {
    changeLI()
})
ul.style.listStyleType == 'circle'
function changeLI() {
    if (ul.style.listStyleType == 'circle') {
        ul.style.listStyleType = "square"
    } else {
        ul.style.listStyleType = "circle"
    }

}


// сайт
let httpButton = document.querySelector('.newHttp')
httpButton.style.width = '350px'
httpButton.style.height = '30px'
httpButton.style.fontSize = '15px'

httpButton.addEventListener('click', () => {
    addA();
})
function addA() {
    
}

